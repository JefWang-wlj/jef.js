                
                //打乱数组顺序
                function RandomArr(n) {
                    var arr = [];
                    for (var i = 0; i < n; i++) {
                        arr[i] = i;
                    }
                    arr.sort(function () { return 0.5 - Math.random() })
                    var str = arr.join();
                    return arr;
                }
               
                
               console.log( RandomArr(16).slice(0,4).concat(RandomArr(26).slice(0,6)));