<template>
  <ul :class="treeCls">
    <li v-for="(item, index) in data" :class="{[`${prefixCls}-treenode-disabled`]: item.disabled,[dropOverCls]: dragOverIndex === index}" @dragover="dragover" @drop="drop(index,$event)" @dragenter="dragenter(index,$event)" @dragleave="dragleave(index,$event)" ref="node">
      <span :class="[`${prefixCls}-switcher`,{[`${prefixCls}-switcher-disabled`]: item.disabled,[`${prefixCls}-switcher-noop`]: item.isLeaf,[`${prefixCls}-noline_docu`]: item.isLeaf,[`${prefixCls}-noline_${item.expanded ? 'open' : 'close'}`]: !item.isLeaf}]" @click="setExpand(item.disabled, index)"></span>
      <span v-if="checkable" :class="checkboxCls(item)" @click.prevent="setCheck(item.disabled || item.disableCheckbox, index)">
        <span :class="prefixCls + '-checkbox-inner'"></span>
      </span>
      <a :title="item.title" :class="selectHandleCls(item)" @click.prevent="setSelect(item.disabled, index)" :draggable="draggable" @dragstart="dragstart(index,$event)" @dragend="dragend">
        <span :class="prefixCls + '-title'" v-html="item.title"></span>
      </a>
      <transition name="slide-up">
        <tree v-if="!item.isLeaf" :data="item.children" :clue="`${clue}-${index}`" :multiple="multiple" :checkable="checkable" :class="`${prefixCls}-child-tree-open`" v-show="item.expanded" :draggable="draggable"></tree>
      </transition>
    </li>
  </ul>
</template>
<script>
import emitter from '../../mixins/emitter';
import { getOffset } from '../../utils/fn';

export default {
    name: 'Tree',
    mixins: [emitter],
    props: {
        clue: {
            type: String,
            default: '0',
        },
        data: {
            type: Array,
            default: () => [],
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        checkable: {
            type: Boolean,
            default: false,
        },
        draggable: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        prefixCls: 'ant-tree',
        dragIndex: -1,
        dragOverIndex: -1,
        dropPosition: 0,
        dragCrossSameTree: false,
    }),
    computed: {
        treeCls() {
            return this.clue === '0' ? this.prefixCls : `${this.prefixCls}-child-tree`;
        },
        dropOverCls() {
            let res;
            switch (this.dropPosition) {
                case 0:
                    res = 'drag-over';
                    break;
                case 1:
                    res = 'drag-over-gap-bottom';
                    break;
                case -1:
                    res = 'drag-over-gap-top';
                    break;
                default:
            }
            return res;
        },
    },
    watch: {
        data() {
            this.setKey();
            this.preHandle();
        },
    },
    mounted() {
        this.setKey();
        this.preHandle();
        
        this.$on('nodeSelected', (params) => {
          if(this.clue !== '0') return this.dispatch('Tree', 'nodeSelected', params);
          if (!this.multiple && params.status) {
            if (this !== params.origin) {
              for(let i = 0; i < this.data.length; i++) {
                this.$set(this.data[i], 'selected', false);
              }
            }
            this.broadcast('Tree', 'cancelSelected', params.origin);
          }
          this.$emit('select', this.getSelectedNodes());
        });

        this.$on('cancelSelected', ori => {
          this.broadcast('Tree', 'cancelSelected', ori);

          if(this !== ori) {
            for(let i = 0; i < this.data.length; i++) {
              this.$set(this.data[i], 'selected', false);
            }
          }
        });

        this.$on('parentChecked', (params) => {
          if(this.clue == params.clue || this.clue.startsWith(params.clue + '-')) {
            for(let i = 0; i < this.data.length; i++) {
              this.$set(this.data[i], 'checked', params.status);
              this.$set(this.data[i], 'childrenCheckedStatus', params.status ? 2 : 0);
            }
            this.broadcast('Tree', 'parentChecked', params);
          }
        });

        this.$on('childChecked', (params) => {
          if(this.clue === '0') {
            this.$nextTick(() => {
              this.$emit('check', this.getCheckedNodes());
            });
          }
          if (this === params.origin) {
            return;
          }

          for (let [i, item] of this.data.entries()) {
            if (`${this.clue}-${i}` === params.clue) {
              let temp = this.getChildrenCheckedStatus(item.children);

              if (temp !== item.childrenCheckedStatus) {
                this.$set(this.data[i], 'checked', !!temp);
                this.$set(this.data[i], 'childrenCheckedStatus', temp);

                if (this.clue !== '0') {
                  this.dispatch('Tree', 'childChecked', { origin: this, clue: this.clue });
                }
              }
            }
          }
        });
        this.$on('dragdrop', (sourceClue, targetClue, dropPosition) => {
            if (this.clue !== '0') return this.dispatch('Tree', 'dragdrop', [sourceClue, targetClue, dropPosition]);
            sourceClue = sourceClue.split('-');
            let sourceData = this.data, _sourceData, lastSourceIndex = sourceClue[sourceClue.length - 1];
            for (let i = 1; i < sourceClue.length - 1; i++) {
                const index = sourceClue[i];
                if (i === 1) {
                    sourceData = sourceData[index];
                } else {
                    sourceData = sourceData.children[index];
                }
            }
            if (sourceClue.length > 2) {
                _sourceData = JSON.parse(JSON.stringify(sourceData.children[lastSourceIndex]));
            } else {
                _sourceData = JSON.parse(JSON.stringify(sourceData[lastSourceIndex]));
            }

            targetClue = targetClue.split('-');
            let targetData = this.data;
            let targetIndex = targetClue[targetClue.length-1];

            for(let i = 1;i< targetClue.length - 1;i++){
              const index = targetClue[i];
              if(i === 1){
                targetData = targetData[index];
              }else{
                targetData = targetData.children[index];
              }
            }
            switch(dropPosition) {
              case 0:
                if(targetClue.length > 2){
                  targetData = targetData.children[targetIndex];
                } else {
                  targetData = targetData[targetIndex];
                }
                if(targetData.children){
                  targetData.children.push(_sourceData);
                }else{
                  this.$set(targetData, 'children', [_sourceData]);
                }
                break;
              case -1:
              case 1:
                if(targetClue.length > 2){
                  targetData.children.splice(targetIndex + dropPosition, 0, _sourceData);
                }else{
                  targetData.splice(targetIndex + dropPosition, 0, _sourceData);
                }
                break;
            }

            if (sourceClue.length > 2) {
                if (sourceData.children.length === 1) {
                    this.$delete(sourceData, 'children');
                } else {
                    sourceData.children.splice(lastSourceIndex, 1);
                }
            } else {
                sourceData.splice(lastSourceIndex, 1);
            }
        });
    },
    methods: {
      dragstart(index,ev) {
        ev.stopPropagation();
        this.dragIndex = index;
        ev.dataTransfer.setData('dragClue', `${this.clue}-${index}`);
      },
      dragover(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      },
      drop(index,ev) {
        ev.stopPropagation();
        this.dragOverIndex = -1;
        const dragClue = ev.dataTransfer.getData('dragClue');
        const selfClue = `${this.clue}-${index}`;

        // 如果拖拽的对象不是自己的父辈级
        if (!selfClue.startsWith(dragClue)) {
          if (this.clue === '0') {
            this.$emit('dragdrop', dragClue, selfClue, this.dropPosition);
          } else {
            this.dispatch('Tree', 'dragdrop', [dragClue, selfClue, this.dropPosition]);
          }
        }
      },
      dragenter(index, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if(this.dragIndex === index) return;
        if(this.dragOverIndex > -1) this.dragCrossSameTree = true;
        this.dragOverIndex = index;
        const offset = getOffset(this.$refs.node[index]);
        const offsetTop = offset.top;
        const offsetHeight = offset.bottom - offset.top;
        const pageY = ev.pageY;
        const gapHeight = 2;

        if (pageY > offsetTop + offsetHeight - gapHeight) {
          this.dropPosition = 1;
        }else if (pageY < offsetTop + gapHeight) {
          this.dropPosition = -1;
        }else{
          this.dropPosition = 0;
        }
        this.$set(this.data[index], 'expanded', true);
      },
      dragleave(index, ev) {
        ev.stopPropagation();
        if(this.dragIndex === index) return;
        if(this.dragCrossSameTree) {
          this.dragCrossSameTree = false;
        }else{
          this.dragOverIndex = -1;
        }
      },
      dragend(ev) {
        ev.stopPropagation();
        this.dragIndex = -1;
      },
      treeNodeCls(item) {
        return {
          [`${this.prefixCls}-treenode-disabled`]: item.disabled
        }
      },
      switcherCls(item) {
        const expandedState = item.expanded ? 'open' : 'close';

        return [
          `${this.prefixCls}-switcher`,
          {
            [`${this.prefixCls}-switcher-disabled`]: item.disabled,
            [`${this.prefixCls}-switcher-noop`]: item.isLeaf,
            [`${this.prefixCls}-noline_docu`]: item.isLeaf,
            [`${this.prefixCls}-noline_${expandedState}`]: !item.isLeaf
          }
        ];
      },
      checkboxCls(item) {
        return [
          `${this.prefixCls}-checkbox`,
          {
            [`${this.prefixCls}-checkbox-disabled`]: item.disabled || item.disableCheckbox,
            [`${this.prefixCls}-checkbox-checked`]: item.checked && item.childrenCheckedStatus === 2,
            [`${this.prefixCls}-checkbox-indeterminate`]: item.checked && item.childrenCheckedStatus === 1
          }
        ];
      },
      selectHandleCls(item) {
        const wrap = `${this.prefixCls}-node-content-wrapper`;

        return [
          wrap,
          `${wrap}-normal`,
          {
            [`${this.prefixCls}-node-selected`]: !item.disable && item.selected,
            draggable: this.draggable
          }
        ];
      },
      setKey() {
        for (let i = 0; i < this.data.length; i++) {
          this.data[i].clue = `${this.clue}-${i}`;
        }
      },
      preHandle() {
        for (let [i, item] of this.data.entries()) {
          if (!item.children || !item.children.length) {
            this.$set(this.data[i], 'isLeaf', true);
            this.$set(this.data[i], 'childrenCheckedStatus', 2);
            continue;
          }

          this.$set(this.data[i], 'isLeaf', false);
          if (item.checked && !item.childrenCheckedStatus) {
            this.$set(this.data[i], 'childrenCheckedStatus', 2);
            this.broadcast('Tree', 'parentChecked', { status: true, clue: `${this.clue}-${i}` });
          } else {
            let status = this.getChildrenCheckedStatus(item.children);
            this.$set(this.data[i], 'childrenCheckedStatus', status);
            
            if (status !== 0) {
              this.$set(this.data[i] ,'checked', true);
            }
          }
        }
      },
      setExpand(disabled, index) {
        if (!disabled) {
          this.$set(this.data[index], 'expanded', !this.data[index].expanded);
        }
      },
      setSelect(disabled, index) {
        if (!disabled) {
          const selected = !this.data[index].selected;

          if (this.multiple || !selected){
            this.$set(this.data[index], 'selected', selected);
          } else {
            for (let i = 0; i < this.data.length; i++) {
              if (i === index) {
                this.$set(this.data[i], 'selected', true);
              } else {
                this.$set(this.data[i], 'selected', false);
              }
            }
          }

          if (this.clue === '0') {
            this.$emit('nodeSelected', { origin: this, status: selected });
          }else{
            this.dispatch('Tree', 'nodeSelected', { origin: this, status: selected });
          }
        }
      },
      setCheck(disabled, index) {
        if (disabled) {
          return;
        }

        const checked = !this.data[index].checked;
        this.$set(this.data[index], 'checked', checked);
        this.$set(this.data[index], 'childrenCheckedStatus', checked ? 2 : 0);
        if (this.clue === '0') {
          this.$emit('childChecked', { origin: this, clue: this.clue });
        }else{
          this.dispatch('Tree', 'childChecked', { origin: this, clue: this.clue });
        }
        this.broadcast('Tree', 'parentChecked', { status: checked, clue: `${this.clue}-${index}` });
      },
      getNodes(data, opt) {
        data = data || this.data;
        let res = [];

        for (let node of data) {
          let tmp = true;
          for (let [key, value] of Object.entries(opt)) {
            if (node[key] !== value) {
              tmp = false;
              break;
            }
          }
          if (tmp) {
            res.push(node);
          }
          if (node.children && node.children.length) {
            res = res.concat(this.getNodes(node.children, opt));
          }
        }
        return res;
      },
      getSelectedNodes() {
        return this.getNodes(this.data, { selected: true });
      },
      getCheckedNodes() {
        return this.getNodes(this.data, { checked: true, childrenCheckedStatus: 2 });
      },
      getHalfCheckedNodes(){
        return this.getNodes(this.data, {checked: true,childrenCheckedStatus:1});
      },
      getChildrenCheckedStatus(children) {
        let checkNum = 0,
            child_childrenAllChecked = true;

        for (let child of children) {
          if (child.checked) {
            checkNum++;
          }
          if (child.childrenCheckedStatus !== 2) {
            child_childrenAllChecked = false;
          }
        }
        // 全选
        if (checkNum === children.length) {
          return child_childrenAllChecked ? 2 : 1;
        // 部分选择
        } else if (checkNum > 0) {
          return 1;
        } else {
          return 0;
        }
      }
    }
}
</script>
