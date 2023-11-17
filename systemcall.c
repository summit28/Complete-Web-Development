//Aim:Implement the C program in which main program accepts an integer array//

#include <stdio.h>

#include <stdlib.h>

#include <unistd.h>

#include <string.h>

int main(int argc, char *argv[])

{

int val[10],ele;

pid_t pid;

char* cval[10];

//char *newenviron[] = { NULL };

int i,j,n,temp;

printf("\nEnter the size for an array: ");

scanf("%d",&n);

printf("\nEnter %d elements : ", n);

for(i=0;i<n;i++)

scanf("%d",&val[i]);

printf("\nEntered elements are: ");

for(i=0;i<n;i++)

printf("\t%d",val[i]);

for(i=1;i<n;i++)

{ for(j=0;j<n-1;j++)

{ if(val[j]>val[j+1])

{ temp=val[j];

val[j]=val[j+1];val[j+1]=temp;

} } }

printf("\nSorted elements are: ");

for(i=0;i<n;i++)

printf("\t%d",val[i]);

printf("\nEnter element to search: ");

scanf("%d",&ele);

val[i] = ele;

for (i=0; i < n+1; i++)

{ char a[sizeof(int)];

snprintf(a, sizeof(int), "%d", val[i]);

cval[i] = malloc(sizeof(a));

strcpy(cval[i], a);

}

cval[i]=NULL;

pid=fork();

{ execv(argv[1], cval);

perror("Error in execve call...");

}}

/*

//Enter elements to search//

#include <stdio.h>

#include <stdlib.h>



int main(int argc, char *argv[]) {

    if (argc < 3) {

        printf("Usage: %s <element> <array_elements...>\n", argv[0]);

        return 1;

    }



    int arr[argc - 2]; // Array to store elements from command line args

    int ele = atoi(argv[1]); // Element to search for



    for (int j = 2; j < argc; j++) {

        int n = atoi(argv[j]);

        arr[j - 2] = n;

    }



    int i = 0;

    int j = argc - 3; // Setting the right boundary for the searchn

    int c;

    

    while (i <= j) {

        c = (i + j) / 2;

        

        if (arr[c] == ele) {

            printf("\nElement Found in the given Array...!!!\n");

            return 0;

        } else if (ele > arr[c]) {

            i = c + 1;

        } else {

            j = c - 1;

        }

    }



    printf("\nElement Not Found in the given Array...!!!\n");

    return 0;

}

/*

sumit@sumit-virtualbox:~$ cc systemcall3a.c -o systemcall3a

sumit@sumit-virtualbox:~$ cc systemcall3b.c -o systemcall3b

sumit@sumit-virtualbox:~$ ./systemcall3a ./systemcall3b */



