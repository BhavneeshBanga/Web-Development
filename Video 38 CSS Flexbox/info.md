# amazing website to start with
<!-- https://flexboxfroggy.com/ -->
parent child relation mai lagaya ja sakta hai

parent ko container bolenege
child ko item

# justify content main axis k around kaam karta hai
# main axis decide karta hai aapka flex ka direction


align item works around cross axis

sabka by default fex grow 0 hotta hai

.first {
    background-color: orange;
    flex-grow: 1;
}


.second {
    background-color: green;
    flex-grow: 2;
}


iska matlab hai jitna space bacha hua hai uska 1 part first ko 2 part second ko mil jayega

```

flex-shrink: 4;   -> iska meaning baakiyon k comparison mai 4 guna jaldi shrink hoga

sab k sab equa way mai shrink honge , 


```

flex-basis: 200px;    ----> main axis k around
width ko overwrite kar deta hai

