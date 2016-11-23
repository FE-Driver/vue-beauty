/**
 * Created by denglei on 16/8/24.
 */
import { defaultProps } from '../../utils'

export default defaultProps({
    prefixCls: 'ant-carousel',
    className: '',
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: '50px',
    cssEase: 'ease',
    dots: true,
    dotsClass: 'slick-dots',
    draggable: true,
    effect: 'scrollx',
    easing: 'linear',
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    listWidth: null,
    lazyLoad: false,
    responsive: Array,
    rtl: false,
    slide: 'div',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    variableWidth: false,
    vertical: false,
    edgeEvent: null,
    swipeEvent: null,
    beforeChange () {},
    afterChange () {},
    clickHandler () {}
})
