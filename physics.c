#include <stdio.h>

void main(){
    float m1 = 0.00095f;//총알질량
    float m2 = 0.001072f;//종이컵 질량
    float g = 10;//중력가속도
    float h;

    scanf("%f", &h);
}

void hi(float h){
    float energy;//역학적 에너지
    float v1, v2;

    energy = (m1+m2)*g*h;
    v2 = sqrt(2*energy/m);
    v1 = v2*(m1+m2)/m1;
    printf(v1);
}