/*
 * search.c
 * an implementation of searching a string of characters inside a certain
 * input file.
 * Specifications:
 * 1.) open read the contents of a (text) file.
 * 2.) locate if the string of characters to be searched is found.
 * 3.) show the number of instances of that string of characters being searched.
 *
 */

/*
 * My approach:
 * 1.) Read and copy block of text from textfile
 * 2.) tokenize by spaces
 * 3.) compare the string of characters, not by characters
 *
 */

#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<stdbool.h>

/* Macro to be used */
#define getIntArraySize(arr_Num) \
    sizeof(arr_Num)/sizeof(arr_Num[0])  // returns the size of array.

bool searchString(FILE *pFile, char *searchWord);
int countWord(char*);

bool main(int argc, char *argv[]) {

    if (argc < 3) {
        printf("insufficient parameters\n");
        return -1;
    } else if (argc > 3) {
        printf("excess parameters\n");
        return -1;
    }

    char *fileName = argv[1];
    char *word = argv[2];

    FILE *pFile = fopen(fileName, "r"); // Open the file as read-only
    if (pFile == NULL) {
        printf("error reading %s\n", fileName);
        return -1;
    }
    bool result = searchString(pFile, word);

    if (result) {
        printf("%s found\n", word);
    } else {
        printf("%s NOT found\n", word);
    }

    fclose(pFile);
    return result;
}

int countWord(char *word) {
    int count = 0;
    char *pWord = word;
    while(*pWord != '\n' ||
            *pWord != '\0') {
        count++;
    }

    return count;
}

bool searchString(FILE *pFile, char *word) {
    bool result = false;
    /* read and copy all the contents of the file */

    return result;
}
