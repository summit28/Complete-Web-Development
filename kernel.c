#include <linux/kernel.h>

asmlinkage long sys_hello(void)

{

printk(“Hello world\n”);

return 0;

}

//Makefile

obj-y := hello.o

//userspace.c

#include

<stdio.h>

#include

<linux/kernel.h>

#include

<sys/syscall.h>

#include <unistd.h>

int main()

{

long int amma = syscall(354);

printf("System call sys_hello returned" %ld\n”, amma);return 0;

	
