#include <fcntl.h>

#include <stdio.h>

#include <sys/stat.h>

#include <unistd.h>

int main()

{

int fd,fd1;

char * myfifo = "myfifo";

char buf[1024];

int words = 1, len = 0, i=0;

FILE *fp;

char * myfifo1 = "myfifo1";

mkfifo(myfifo1, 0777);

fd = open(myfifo, O_RDONLY);

read(fd, buf, 1024);

printf("First Message Received: \n%s", buf);

while(buf[i]!='\0')

{

while(buf[i]==' ')//no.of spaces=no.of words

{

words++;

i++;

}

i++;

}

printf("\nTotal words = %d \n",words);

fp = fopen("test.txt", "w+");

fprintf(fp, "Total words = %d \n",words);

fclose(fp);

close(fd);

unlink(myfifo);

fd1 = open(myfifo1, O_WRONLY);

write(fd1, "Your message received...\n", sizeof("Your message received...\n"));

close(fd1);

return 0;

}



/*

/Inter process communication in Linux using FIFO//

#include<stdio.h>

#include <fcntl.h>

#include <sys/stat.h>

#include <sys/types.h>

#include <unistd.h>

int main()

{ int fd,fd1;

char * myfifo = "myfifo";

char * myfifo1 = "myfifo1";

char buf[1024];

mkfifo(myfifo, 0666);

mkfifo(myfifo1, 0777);

fd = open(myfifo, O_WRONLY);

write(fd, "Hello friends... \nWelcome hi...", sizeof("Hello friends... \nWelcome hi..."));

close(fd);

unlink(myfifo);

fd1 = open(myfifo1, O_RDONLY);SS

read(fd1, buf, sizeof(buf));

printf("%s",buf);

unlink(myfifo1);

close(fd1);

return 0;}

*/

/*

sumit@sumit-virtualbox:~$ cc fifo9b.c -o fifo9b

sumit@sumit-virtualbox:~$ ./fifo9b



sumit@sumit-virtualbox:~$ cc fifo9a.c -o fifo9a

sumit@sumit-virtualbox:~$ ./fifo9a







*/
