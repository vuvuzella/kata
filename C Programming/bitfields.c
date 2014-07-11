/*
 * bitfields.c
 * an implementation of using bitfields
 *
 */

#include<stdio.h>
#include<stdlib.h>
#include<limits.h>

/* a bit field struct */
struct virtual_addr {
    unsigned int    offset      :   12; /* 12 bits */
    unsigned int    page        :   6;  /* 6 bits */
    unsigned int                :   6;  /* 6 unused bits or padding*/
    unsigned int    segment     :   8;
    unsigned int    segment2    :   8;
    unsigned int    segment3    :   8;
    unsigned int    segment4    :   8;
    unsigned int    segment5    :   8;
    unsigned int    segment6    :   32;
} target;

int powerOf2(int);
void displayBits(int);

int main(int argc, char **argv) {   // arv as double pointer to char

    // unsigned int x = 0x0c;  /* 1100 */
    // unsigned int y = 0x08;  /* 1000 */

    /* Get the culprit bit and set it to 1 */
    // y |= (x ^ y);   
    // if (x == y)
    //     printf("x == y\n");
    // printf("%d\n", sizeof(target));
    /* end */
    
    // int count;
    // for (count = 1; count <= 8; count++)
    //     printf("is %d a power of 2? %s\n", count, powerOf2(count) ? "Yes": "No");

    // displayBits(8);
    unsigned int num = 1;
    int cnum = -1;
    // unsigned char num = -1;
    // char cnum = '1';
    // if (num < cnum) {   // This machine converts negative 
    //     printf("this will not print\n");
    //     printf("%0#x, %0#x\n", num, cnum);
    //     printf("%d, %d\n", num, cnum);
    // }
    // else {
    //     printf("%d, %d\n", num, cnum);
    // }
    int neg2 = -1;
    unsigned int neg1 = 1;
    int bitshift = UINT_MAX * sizeof(unsigned int) - 1;

    printf("%d\n", bitshift);
    neg1 <<= bitshift;
    printf("%d\n", neg1);
    neg1 = ~neg1;
    printf("%d\n", neg1);
    neg1 |= 0x80;
    neg1 += 0x01;
    printf("%s\n", neg1 == neg2 ? "True" : "False");
    printf("%0#X, %0#X\n", neg1, neg2);
    printf("%d, %d\n", neg1, neg2);


    return 0;
}

int powerOf2(int num) {
    int count = 0;
    while((num >> 1) > 1) {
        num >>= 1;
        count++;
    }
    printf("%d\n", num);
    return 1;
}


// void displayBits(int value) {
// 
//     unsigned int mask = 1 << 31;
//     int count
// }
