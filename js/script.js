//window load
const intro_ani = document.querySelectorAll('.intro_ani')
window.onload = function(){
    //로딩 이미지 사라지게
    document.querySelector('#load').style.opacity = '0'
    //인트로 영역 애니메이션 시작
    for(let i of intro_ani){
        i.classList.add('ani_on')
    }
    if(window.innerWidth > 500){
        document.body.style.overflow = 'hidden';
    }
}


//fullpage
$('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage','sixthPage','seventhPage','eighthPage'],
    menu: '#myMenu',
    autoScrolling:true,
    scrollBar: true, //기본 스크롤 이벤트(scrollY값 계산하는) 사라지지 않게
    scrollingSpeed : 1000, //스크롤 속도 기본값 700
    navigation: true,
    paddingTop:'80px',
    paddingBottom:'80px',
    // normalScrollElements: '.img_popup_container,.img_popup_bg',
    onLeave: function(index, nextIndex, direction){
        //스크롤 속도
        if(index == 1){
            $.fn.fullpage.setScrollingSpeed(1500)
        }else{
            $.fn.fullpage.setScrollingSpeed(600)
        }
        //웹 섹션 이동시 배경 디자인
        if(window.innerWidth > 1200){
            $('.web_section').css({'--afterWidth' : '80%'})
        }else{
            $('.web_section').css({'--afterWidth' : '90%'})
        }
        $('.web_section').css({
            '--afterHeight' : '100%',
            '--afterBg' : '#ffffff44'
        })
        //클론코딩, 그래픽 섹션 마우스 커서 디자인
        if(nextIndex >= $('.section').length -1 ){
            $('#cursor').addClass('active')
        }else{
            $('#cursor').removeClass('active')
        }
        if($('.section').eq(index-1).is('.web_section')){
            this.find('.bg_circle').removeClass('active')
        }
        //웹 섹션으로 이동시 헤더 네비게이션 활성화
        if($('.section').eq(nextIndex-1).is('.web_section')){
            $('#myMenu > li:nth-child(4)').addClass('subpage_on')
        }else{
            $('#myMenu > li:nth-child(4)').removeClass('subpage_on')
        }
    },
    afterLoad: function(origin, destination, direction, trigger){
        //웹 섹션 이동 후 배경 디자인
        if(window.innerWidth > 800){
            $('.web_section').css({
                '--afterWidth' : '100%',
                '--afterHeight' : '360px',
                // '--afterHeight' : '40%',
                '--afterBg' : '#ffffff99'
            })
        }else{
            $('.web_section').css({
                '--afterWidth' : '100%',
                '--afterHeight' : '680px',
                '--afterBg' : '#ffffffcc'
            })
        }
        if($('.section').eq(destination-1).is('.web_section')){
            this.find('.bg_circle').addClass('active') //배경 원
            this.find('.mockup_all').addClass('scrollOn')
            this.find('.info').addClass('scrollOn')
        }
    },
    //반응형
    responsiveWidth: 500,
    afterResponsive: function(isResponsive){
        if(isResponsive){
            $.fn.fullpage.setAutoScrolling(false)
        }
    }
})


//nav
let main = document.querySelector('#myMenu > li:nth-child(4)')
let sub = document.querySelector('#myMenu .sub')

main.addEventListener('mouseover',function(){
    sub.style.transition = '.4s'
    sub.style.height = '170px'
})
main.addEventListener('mouseout',function(){
    sub.style.transition = 'none'
    sub.style.height = '0'
})




//modal popup
const modal_btn = document.querySelectorAll('.modal_btn')
const modal_popup_bg = document.querySelectorAll('.modal_popup_bg')
const modal_close = document.querySelectorAll('.modal_popup_bg .close_btn')

modal_btn.forEach(function(target,index){
    target.addEventListener('click',function(){
        modal_popup_bg[index].style.display = 'block'
        $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
        cursor.classList.add('active')
    })
})

modal_close.forEach(function(target,index){
    target.addEventListener('click',function(){
        modal_popup_bg[index].style.display = 'none'
        $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
        cursor.classList.remove('active')
    })
})

modal_popup_bg.forEach(function(target,index){
    target.addEventListener('click',function(e){
        if(this == e.target) //배경 클릭 시 창 닫기
        target.style.display = 'none'
        $.fn.fullpage.setAllowScrolling(true)
        cursor.classList.remove('active')
    })
})