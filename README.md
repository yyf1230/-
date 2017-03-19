
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    html,body{
        height:100%;
        margin:0;
        overflow: hidden;
    }
    main{
        width: 100%;
        height: 100%;
        background-color: #000;
        overflow: hidden;
    }
</style>
<body>
<main></main>
</body>
</html>
<script>
    var array = [];
    function Q(x,y,vx,vy,r,color,index) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.color = color;
        this.index = index;
    }


        var a = 0;
    document.querySelector('main').onclick = function (e) {
        var getRandomColor = function () {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        };

        var colo = getRandomColor();
        var s = Math.random()*20+5;
        var j = Math.random()*25+1;
        var r = Math.random()*5+15;
        array.push(new Q(e.offsetX,e.offsetY,s,j,r,colo,a));
//        for(var i = 0; i<array.length; i++){
//            array[a].index = a;
            array[a].create();
            a++;
//        }
    };




    Q.prototype.create = function () {
        var div = document.createElement('div');
        div.style.width = this.r+'px';
        div.style.height = this.r+'px';
        div.style.borderRadius = '50%';
        div.style.backgroundColor = this.color;
        div.style.position = 'absolute';
        div.style.left = this.x+'px';
        div.style.top = this.y+'px';
        document.querySelector('main').appendChild(div);
    };
    
    
    
    
    Q.prototype.active = function () {
        this.vy += 1;
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > innerWidth || this.x < 0) {
            this.vx = -this.vx;

        }
        if (this.y > innerHeight-this.r) {
            this.y = innerHeight-this.r;
            this.vy = -this.vy / 1.2
        }
        if(this.vy == 0){

            this.vx = this.vx/1.5

        }
        document.querySelector('div:nth-of-type('+(this.index+1)+')').style.left = this.x+'px';
        document.querySelector('div:nth-of-type('+(this.index+1)+')').style.top = this.y+'px';

    };





    function animate() {
        requestAnimationFrame(animate);
        for(var i = 0; i<array.length; i++){
            array[i].active();

/*                                 */
for (var u = 0; u < array.length; u++) {
                if (i == u) {
                    break;
                }
                var jlx = array[i].x - array[u].x;
                var jly = array[i].y - array[u].y;
                var jl = Math.sqrt(Math.abs(jly * jly + jlx * jlx));


                if (jl <25) {

                    var sd1, sd2;

                    sd1 = array[i].vx;

                    array[i].vx = array[u].vx;

                    array[u].vx = sd1;


                    sd2 = array[i].vy;

                    array[i].vy = array[u].vx;

                    array[u].vy = sd2;

                }

            }








        }
    }
    requestAnimationFrame(animate);
</script>
