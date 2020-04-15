$(document).ready(function () {
    $('#sect6_cir').click(function () {
        location.href = 'http://www.cuckoo.co.kr/'
    })
    $('#mb_sec6_sen').click(function () {
        location.href = 'http://www.cuckoo.co.kr/'
    })
    //pc화면에서 첫번째그림 전환
    var j = 0;
    setInterval(function () {
        if (j % 2 == 0) {
            j++;
            $('#sec2_wrap>li').eq(0).fadeOut();
            $('#sec2_wrap>li').eq(1).fadeIn();

        } else if (j % 2 == 1) {
            j--;
            $('#sec2_wrap>li').eq(1).fadeOut();
            $('#sec2_wrap>li').eq(0).fadeIn();
        }
    }, 2500);
    //화면에서 제품구성 슬라이드 배너
    var i = 0;
    $('#sec3_mask').click(function () {
        i++;
        if (i % 2 == 1) {
            $('#sec3_wrap').animate({
                left: $('#sec3_wrap>li').width() * '-1'
            }, 500);
            $('#sec3_title').html('쿠쿠 2중 모션 패킹');
            $('#sec3_title_sub').html('진정한 밥맛을 위한<br>쿠쿠만의 특허기술');
            $('#sec3_sub').html('취사 중 높은 압력을 밀폐층과 지지층<br>사이에 있는 중공층이 압축해 증기가 샐 틈이<br>없게 해주어 밥맛이 무척 좋아지는 거슨 물론<br>보온 시에도 내부압력을 꽉 잡아주어 치지고<br>부드러운 밥맛을 오래 유지 ')
        } else if (i % 2 == 0) {
            $('#sec3_wrap').animate({
                left: 0
            }, 500);
            $('#sec3_title').html('FULL 스테인리스 내솥');
            $('#sec3_title_sub').html('밥맛은 물론 건강함<br>까지 한 번에 잡다');
            $('#sec3_sub').html('쿠쿠는 밥솥 커버 뿐 아니라 내솥의 안과 밖<br>보온 시 새는 열을 차단하는 내솥케이스까지<br>깨끗한 full 스테인리스로 건강하고 차진<br>밥맛을 오래오래 즐길수 있습니다.')
        }
    })
    //pc화면에서 점갤러리
    var k = 0;
    $('#buts>li').click(function () {
        k = $(this).index();
        $('#buts>li').removeClass('on');
        $(this).addClass('on');
        if (k == 0) {
            $('.sec5_sub_title').html('1.원터치 버튼을 눌러<br>커버를 한 번에 분리');
            $('.sec5_sen').html('돌리지 않고 버튼을 누르기만 하면<br>한 번에 분리되어 정말 편리합니다.');
        } else if (k == 1) {
            $('.sec5_sub_title').html('2.분리된 커버를<br>간편하게 세척');
            $('.sec5_sen').html('스테인리스 소재에 세척까지<br>간편하여 언제나 깨끗합니다.')
        } else if (k == 2) {
            $('.sec5_sub_title').html('3.재부착도 원터치로<br>손쉽게 간편 부착');
            $('.sec5_sen').html('위치에 맞춰 누르면 ‘딸깍’소리와<br>동시에 손쉽게 부착됩니다.')
        }
        $('#sec5_le_imgs img').fadeOut();
        $('#sec5_le_imgs').animate({
            left: k * $('#sec5_le_imgs>li').width() * '-1'
        }, 500, function () {
            $('#sec5_le_imgs img').fadeIn(500);
        })
        $('#sec5_imgs').animate({
            left: k * $('#sec5_imgs>li').width() * '-1'
        }, 500)
    })
    //모바일에서 첫번째 배너 움직임
    var u = 0;
    setInterval(function () {
        u++;
        if (u % 2 == 1) {
            $('#mb_sec2_wrap').animate({
                left: $('#mb_section2_pic').width() * '-1'
            })
        } else if (u % 2 == 0) {
            $('#mb_sec2_wrap').animate({
                left: 0
            })
        }
    }, 2500);
    //모바일 내구성설명
    $('#left_arr').click(function () {
        $('#mb_sec3_wrap').animate({
            left: 0
        }, 500);
        $('#mb_sec3_title').html('FULL 스테인리스 내솥');
        $('#mb_sec3_title_sub').html('밥맛은 물론 건강함<br>까지 한 번에 잡다');
        $('#mb_sec3_sub').html('쿠쿠는 밥솥 커버 뿐 아니라 내솥의 안과 밖<br>보온 시 새는 열을 차단하는 내솥케이스까지<br>깨끗한 full 스테인리스로 건강하고 차진<br>밥맛을 오래오래 즐길수 있습니다.')
    });
    $('#right_arr').click(function () {
        $('#mb_sec3_wrap').animate({
            left: $('#mb_sec3_mask').width() * '-1'
        }, 500);
        $('#mb_sec3_title').html('쿠쿠 2중 모션 패킹');
        $('#mb_sec3_title_sub').html('진정한 밥맛을 위한<br>쿠쿠만의 특허기술');
        $('#mb_sec3_sub').html('취사 중 높은 압력을 밀폐층과 지지층<br>사이에 있는 중공층이 압축해 증기가 샐 틈이<br>없게 해주어 밥맛이 무척 좋아지는 것은 물론<br>보온 시에도 내부압력을 꽉 잡아주어 찰지고 부드러운 밥맛을 오래 유지 ');
    })
    //모바일의 점갤러리
    $('#mb_sec5_buts>li').click(function () {
        var mbi = $(this).index();
        $('#mb_sec5_buts>li').removeClass('mb_on');
        $(this).addClass('mb_on');
        if (mbi == 0) {
            $('#mb_sec5_imgs').animate({
                left: 0
            });
            $('.mb_sec5_sub_title').html('1.원터치 버튼을 눌러<br>커버를 한 번에 분리');
            $('.mb_sec5_sen').html('돌리지 않고 버튼을 누르기만 하면<br>한 번에 분리되어 정말 편리합니다.');
        } else if (mbi == 1) {
            $('#mb_sec5_imgs').animate({
                left: $('#mb_sec5_mask').width() * '-1'
            });
            $('.mb_sec5_sub_title').html('2.분리된 커버를<br>간편하게 세척');
            $('.mb_sec5_sen').html('스테인리스 소재에 세척까지<br>간편하여 언제나 깨끗합니다.')
        } else if (mbi == 2) {
            $('#mb_sec5_imgs').animate({
                left: $('#mb_sec5_mask').width() * '-2'
            });
            $('.mb_sec5_sub_title').html('3.재부착도 원터치로<br>손쉽게 간편 부착');
            $('.mb_sec5_sen').html('위치에 맞춰 누르면 ‘딸깍’소리와<br>동시에 손쉽게 부착됩니다.')
        }
    })
})
