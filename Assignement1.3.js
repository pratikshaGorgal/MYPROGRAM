function DisplayFactors(Data) {
    var Counter = 0;
    for (Counter = 1; Counter <= Data / 2; Counter++) {
        if (Data % Counter == 0) {
            console.log("Factors are:" + Counter);
        }
    }
}
var iNo1 = 20;
DisplayFactors(iNo1);
