ans='y'

until [ $ans = 'n' ]

do

echo "********MENU*********" 

echo "1:create database" 

echo "2:view database" 

echo "3:insert record" 

echo "4:search record" 

echo "5:modify record" 

echo "6:delete record" 

echo "ENTER YOUR CHOICE:"

read ch

case "$ch" in

1)

echo "enter file name"

read fname

echo "enter the database name"

read db

echo "enter fields"

read f1

read f2

printf "\t%s" $db >> $fname

printf "\n %s\t%s \n" $f1 $f2 >> $fname

echo "record created"

;;

2)

echo "enter file name"

read fname

if [ -e $fname ];

then

cat $fname

else

   echo "File does not exist"

fi

;;

3)

echo "enter file name"

read fname

echo "how many entries you want to insert"

read n

while [ $n -gt 0 ]

do

echo "enter field value"

read f1

read f2

n=`expr $n - 1` 

printf "\n %s\t%s \n" $f1 $f2 >> $fname

done

echo "record inserted"

;;

4)

echo "enter file name"

read fname

if [ -e $fname ]

then

echo "enter rollno to be search"

read rno

grep "$rno" "$fname"

ans=$?

if [ $ans -eq 0 ]

then

echo "record found" 

#grep $rno $fname

else

echo "record not found"

fi

else

echo "file does not exit"

fi

;;

5)

echo "enter file name"

read fname

if [ -e $fname ]

then

echo "enter roll no to be modify"

read rno

grep "$rno" "$fname"

ans=$?

if [ $ans -eq 0 ]

then

echo "record found" 

grep -v "$rno" "$fname" > temp.data

echo "enter name"

read fname

echo "$rno" "$fname" >> temp1.data

sort temp.data > temp1.data

rm temp.data

rm $fname

mv temp1.data "$fname" 

echo "record modify"

else

echo "record not found"

fi

else

echo "file does not exists"

fi

;;

6)

echo "enter file name"

read fname

if [ -e $fname ]

then

echo "enter roll no to be deleted"

read rno

grep "$rno" "$fname" 

ans=$?

if [ $ans -eq 0 ]

then

echo "record found" 

grep -v "$rno" "$fname" > temp.data

rm $fname

mv temp.data "$fname" 

echo "record deleted"

else

echo "record not found"

fi

else

echo "file does not exists"

fi

;;

esac

echo "do u want to continue"

read ans

done

/*

op=sh shell.sh

*/

