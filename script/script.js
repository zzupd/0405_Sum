var startNo = 0;   // 시작 값
var endNo = 2;   // 종료 값

// 3개월의 세금이 아래와 같음
var taxBill = [40000, 52500, 30600] ;
// taxBill 세금,  배열변수, 인덱스번호 => 0, 1, 2

var sum = 0;    // 누적을 저장하는 변수, summation 누적
for (var i = startNo; i <= endNo; i++) {  // increase : 증가하다.

    sum += taxBill[i];  // 누적 공식    sum = sum + taxBill[i];
}

document.write("3개 값의 누적 : " + sum);
