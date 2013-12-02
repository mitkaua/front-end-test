                    var h = document.getElementById(17);
                    var o = document.getElementById(18);

                            o.style.visibility="hidden";
                            h.style.visibility="visible";

                    var g = document.getElementById(1017);
                    var t = document.getElementById(1018);

                            t.style.visibility="hidden";
                            g.style.visibility="visible";




function div_change(a,b,c,d,e,f)
            {
                    o = document.getElementById(a);
                    h = document.getElementById(b);
                    g = document.getElementById(c);
                    t = document.getElementById(d);
					x = document.getElementById(e);
					y = document.getElementById(f);
                    if (o.style.visibility=="hidden"){
                            o.style.visibility="visible";
                            h.style.visibility="hidden";

                            g.style.visibility="visible";
                            t.style.visibility="hidden";
							
							x.style.visibility="visible";
                            y.style.visibility="hidden";
							
//                            g.style.display="block";

//                            t.style.display="none";
                    }
                    else{
                            h.style.visibility="visible";
                            o.style.visibility="hidden";

                            t.style.visibility="visible";
                            g.style.visibility="hidden";
							
							
							y.style.visibility="visible";
                            x.style.visibility="hidden";
//                            t.style.display="block";
//                            g.style.display="none";

                    }
             }





                        function provoloka_result(obj)
            {

                    var provoloka_massa = new Array();
                      provoloka_massa["3"]  = "0.052";
                      provoloka_massa["4"]  = "0.092";
                      provoloka_massa["5"]  = "0.144";

                        var n=obj.provoloka_diametr.value;
                        var s=obj.provoloka_summa.value;
						var cost=obj.provoloka_cena.value;

                      if(obj.provoloka_result_in.value=="provoloka_1")
                      {
                         var a=provoloka_massa[n];
                         var res=a*s


                      }
                      if(obj.provoloka_result_in.value=="provoloka_2")
                      {
                         var a=provoloka_massa[n];
                         var res=s/a


                      }

					  res = (res).toFixed(3) 
					  summa = (res*cost).toFixed(2) 
					  
                      obj.provoloka_digit.value=res
					  obj.provoloka_cost.value=summa;

                    }

