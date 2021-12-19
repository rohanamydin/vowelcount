
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
function VowelsConsonants_Counts()
 {
var TextVar = document.getElementById('User_Enter').value;
if (TextVar.length==0) {
 document.getElementById('User_Enter').focus();
 alert("Sorry cannot be empty");
 }
else { 
document.getElementById('word_string').innerHTML = "The word or sentence is <br />" 
+ "<font color='green'>" +TextVar + ".</font>";
document.getElementById('vowels').innerHTML = "<font color='green'>Number of Vowels :</font> " 
 + vowel_count(TextVar);
document.getElementById('consonants').innerHTML = " <font color='green'>Number of Consonants :</font> " 
 + consonants_count(TextVar);
 }
}
function clear_now()
{
 document.getElementById('User_Enter').value="";
 document.getElementById('word_string').innerHTML="";
 document.getElementById('vowels').innerHTML="";
 document.getElementById('consonants').innerHTML="";
 document.getElementById('User_Enter').focus();
} 
 
function vowel_count(str1)
{
 var vowel_list = 'aeiouAEIOU';
 var vcount = 0;
 
 for(var x = 0; x <str1.length ; x++)
 {
if (vowel_list.indexOf(str1[x]) !== -1)
{
 vcount += 1;
}
 
 }
 return vcount;
}
function consonants_count(str1)
{
 var consonant_list = ' bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
 var c_count = 0;
 
 for(var x = 0; x <str1.length ; x++)
 {
if (consonant_list.indexOf(str1[x]) !== -1)
{
 c_count += 1;
}
 
 }
 return c_count;
}