/*
 * searchPattern.c
 * Chapter 4.1 of K&R C 2nd ed.
 * Pattern searching program for a given block of text.
 */

#include<stdlib.h>
#include<stdio.h>

#define MAXLINE 1000

/* test input string */
char str_input[] = "Ah Love! could you and I with Fate conspire\nTo grasp this sorry Scheme of Things entire\nWould not we shatter it to bits -- and then\nRe-mould it nearer to the Heart's Desire!\n\0";

int getLine(char[], int);   // gets a single line of string from input.
int strIndex(char[], char[]); // search function

/* helper functions */
int countStr(char[]);   // counts the characters in a given string

int main(int argc, char* argv[]) {
    printf("%d\n", countStr(str_input));

    return 0;
}

/* helper functions */
int countStr(char input[]) {
    int count = 0;
    while(input[count] != '\0' && count < MAXLINE) {
        printf("%c", input[count]);
        count++;
    }
    return count;
}

/* Primary functions */
int* getLine(char str_input[], int max) {
    int count = 0;
    while(str_input[count] != '\0' && count < MAXLINE) {
        if (str_input[count] == '\n' ) {
            count++;
        }
    }
    int index[count] = {};

}
