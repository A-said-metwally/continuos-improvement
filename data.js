export const users = [
    {Code:"123",Pass:"123", Name:"ahmed" , Image:"../1.jpg", Pages:[{name:"الدجاج الوارد",ref:'/livechkpage'} , {name:"إنتاج المجزر",ref:''},{name:"التجانس",ref:''}]},
    {Code:"456",Pass:"456", Name:"muhammad", Image:"../2.jpg", Pages:[{name:"إنتاج المصنعات",ref:''}]},
    {Code:"789",Pass:"789", Name:"jory", Image:"../3.jpg", Pages:[{name:"جودة العمليات",ref:''} , {name:"جودة المنتجات",ref:''},{name:"مرتجعات العملاء",ref:''}]},
    
  ]

  export const Weights = [
      '0-699', '700-749', '800-849', '850-899', '900-945', '950-999', '1000-1049', '1050-1099',
       '1100-1149', '1150-1199', '1200-1249', '1250-1299', '1300-1349', '1350-1399', '1400-1449',
        '1450-1499', '1500-1549', '1550-1599', '1600-1659', '1650-1699'
  ]

export const dailyRepContent = [
    {
        discrip:"lifechk",
        data:[
            { date:'2022-05-01',
                patchno:"1",
                recived_c:1000, recived_w:1500,
                con_c:200, con_w:300,
                uweight_c:100, uweight_w:190,
                doa_c:30 , doa_w:30 ,
                 },
            { date:'2022-05-01',
                patchno:"2",
                recived_c:3000, recived_w:3800,
                con_c:2400, con_w:200,
                uweight_c:100, uweight_w:150,
                doa_c:350 , doa_w:500 ,
                 },
             { date:'2022-05-02',
                patchno:"1",
                recived_c:2000, recived_w:4000,
                con_c:300, con_w:200,
                uweight_c:100, uweight_w:100,
                doa_c:30 , doa_w:30 ,
                 },
            { date:'2022-05-03',
                patchno:"1",
                recived_c:4000, recived_w:5000,
                con_c:200, con_w:200,
                uweight_c:100, uweight_w:100,
                doa_c:60 , doa_w:30 ,
                 },
            { date:'2022-05-03',
                patchno:"2",
                recived_c:5000, recived_w:5800,
                con_c:200, con_w:200,
                uweight_c:100, uweight_w:100,
                doa_c:60 , doa_w:30 ,
                },
            { date:'2022-05-04',
                patchno:"1",
                recived_c:3000, recived_w:3800,
                con_c:200, con_w:200,
                uweight_c:100, uweight_w:100,
                doa_c:50 , doa_w:30 ,
                },

        ],
        img:'1.jpg'
    },

    {
        discrip:"uniformity",
        data:[
            { date:'2022-05-01',batchNo:1, count:[100,150,200,250,300,400,1200,2000,3000,2500,2000,600 , "","","","","","","",""], uniformity:0.20, trgetWeight:0.60 },
            { date:'2022-05-01',batchNo:1, count:[100,150,200,250,300,400,1200,2000,3000,2500,2000,600 , "","","","","","","",""], uniformity:0.30, trgetWeight:0.60 },
            { date:'2022-05-02',batchNo:1, count:[100,150,200,250,300,400,1200,2000,3000,2500,2000,600 , "","","","","","","",""], uniformity:0.40, trgetWeight:0.45 },
            { date:'2022-05-03',batchNo:1, count:[100,150,200,250,300,400,1200,2000,3000,2500,2000,600 , "","","","","","","",""], uniformity:0.50, trgetWeight:0.55 },
            { date:'2022-05-04',batchNo:1, count:[100,150,200,250,300,400,1200,2000,3000,2500,2000,600 , "","","","","","","",""], uniformity:0.60, trgetWeight:0.80 },
            { date:'2022-05-05',batchNo:1, count:[100,150,200,250,300,400,1200,2000,3000,2500,2000,600 , "","","","","","","",""], uniformity:0.80, trgetWeight:0.50 },
        ],
        img:'2.jpg'
    },
    {
        discrip:"production",
        data:[
            { date:'01/01/2022', freshqty:1000, parts:2000, ashha:1010, percent:"20%" },
            { date:'02/01/2022', freshqty:1500, parts:2800, ashha:1150, percent:"60%" },
            { date:'03/01/2022', freshqty:1600, parts:3000, ashha:1250, percent:"80%" },
            { date:'04/01/2022', freshqty:1200, parts:2900, ashha:1330, percent:"50%" },
        ],
        img:'3.jpg'
    },
    
]


