$('#fullpage').fullpage({
    slidesNavigation: true,
    responsiveWidth: 1024,
    autoScrolling: true,
    lockAnchors: false,
    anchors:['first', 'second', 'third', 'fourth'],
    navigation: true,
    navigationPosition: 'right',
    navigationTolltips: ['인트로', '과거', '현재', '미래'],
    showActiveTooltip: true,
    sctionSelector: '.section',
    slideSelector: '.slide',
    slidesNavigation: false,
});
