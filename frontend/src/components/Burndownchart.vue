<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

<script>

//sum elements of an array up to the index provided
function sumArrayUpTo(arrData, index) {
    var total = 0;
    for(var i = 0; i<=index; i++){
        if(arrData.lenght > i) {
            total += arrData[i];
        }
    }
    return total;
}
</script>