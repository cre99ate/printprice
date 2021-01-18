
class Ink {
    constructor( water, solvent, solventFull, latex, latexFull, uvW, uvC, uvCw, uvCwc, uvCc, uvBlack ){
        this.water = water;        
        this.solvent = solvent;
        this.solventFull = solventFull;
        this.latex = latex;
        this.latexFull = latexFull;
        this.uvW = uvW;
        this.uvC = uvC;
        this.uvCw = uvCw;
        this.uvCwc = uvCwc;  //후렉스주야조명모드 겸 일반 CWC모드
        this.uvCc = uvCc;  //후렉스조명모드
        this.uvBlack = uvBlack;  //후렉스 차폐모드        
    }
}

const paper = new Object();

// 수성
paper.유포지 = new Ink();  paper.유포그레이 = new Ink();
paper.캘지 = new Ink();  paper.캘그레이 = new Ink();
paper.패트지 = new Ink();  paper.와이드칼라 = new Ink();

// 시트류
paper.일반시트 = new Ink();  paper.철판시트 = new Ink();  paper.차량시트 = new Ink();
paper.조명용시트 = new Ink(); paper.투명시트 = new Ink();
paper.엠보시트 = new Ink();
paper.고투명점착시트 = new Ink(); paper.고투명비점착시트 = new Ink();
paper.타공썬팅시트 = new Ink(); paper.타공채널시트 = new Ink();
paper.반사시트 = new Ink(); paper.고무자석 = new Ink();

// 조명후렉스, 그레이후렉스, 메쉬천
paper.조명후렉스 = new Ink(); paper.비조명후렉스 = new Ink(); paper.메쉬천 = new Ink();

// 현수막
paper.현수막90폭 = new Ink();   paper.현수막100폭 = new Ink();   paper.현수막106폭 = new Ink();
paper.현수막110폭 = new Ink();  paper.현수막120폭 = new Ink();   paper.현수막127폭 = new Ink();
paper.현수막130폭 = new Ink();  paper.현수막140폭 = new Ink();   paper.현수막152폭 = new Ink();
paper.현수막160폭 = new Ink();  paper.현수막180폭 = new Ink();   paper.현수막200폭 = new Ink();
paper.현수막250폭 = new Ink();  paper.현수막320폭 = new Ink(); 

// 현수막 저가/보급 5장 10장이상
paper.동일데이터_저가5장이상 = new Ink(); paper.동일데이터_저가10장이상 = new Ink();
paper.동일데이터_보급5장이상 = new Ink(); paper.동일데이터_보급10장이상 = new Ink();           

// 텐트천
paper.텐트천90폭 = new Ink();  paper.텐트천100폭 = new Ink(); paper.텐트천106폭 = new Ink();
paper.텐트천110폭 = new Ink(); paper.텐트천120폭 = new Ink(); paper.텐트천127폭 = new Ink();
paper.텐트천130폭 = new Ink(); paper.텐트천140폭 = new Ink(); paper.텐트천152폭 = new Ink();
paper.텐트천160폭 = new Ink(); paper.텐트천180폭 = new Ink(); paper.텐트천200폭 = new Ink();
paper.텐트천250폭 = new Ink();

//대형헤베당 단가
paper.대형현수막 = new Ink();
paper.대형텐트천 = new Ink();

    // 코팅모드      :   0_출력만,   1_무광,   2_유광,   3_유브이,  4_양면   
    // 현수막 모드   :   0_기본가격, 1_1미터,  2_2미터,  3_3미터,   4_4미터,   5_5미터
    // 대현현수막 모드 : 0_기본가격, 1_30헤베이상    
    // 후레임 모드   :   0_출력만,   1_출력만(장폭),  2_제작,  3_제작(장폭)  
    // 고무자석 모드 :   0_60폭,     1_100폭

//유포지 upo
paper.유포지.water = [ 6000, 8000, 8000, 9000, 18000 ]; //출력만, 무, 유, uv, 양면
paper.유포그레이.water = [ 8000, 10000, 10000, 11000, 20000 ];

//켈지 kel
paper.캘지.water = [ 8000, 10000, 10000, 11000, 20000 ];
paper.캘그레이.water = [10000, 12000, 12000, 13000, 24000 ];

//패트, 와이트칼라
paper.패트지.water = [ 8000, 10000, 10000, 11000, 20000 ];
paper.와이드칼라.water = [ 13000, 15000, 15000, 16000, 30000 ];

//LG일반시트 lg011G
paper.일반시트.solvent = [ 7000, 10000, 10000, 10000, 20000 ];
paper.일반시트.latex = [ 7000, 10000, 10000, 10000, 20000 ];
paper.일반시트.uvC = [ 6000, 9000, 9000, 9000, 18000 ];

//LG철판시트 lg032G
paper.철판시트.solvent = [ 9000, 12000, 12000, 12000, 24000 ];
paper.철판시트.latex = [ 9000, 12000, 12000, 12000, 24000 ];
paper.철판시트.uvC = [ 7000, 10000, 10000, 10000, 20000 ];

//LG차량용시트 lg035G
paper.차량시트.solvent = [ 9000, 12000, 12000, 12000, 24000 ];
paper.차량시트.latex = [ 9000, 12000, 12000, 12000, 24000 ];

//LG조명용시트 lg_SPT031M
paper.조명용시트.solvent = [ 15000, 18000, 18000, 18000, 36000 ];
paper.조명용시트.latex = [ 15000, 18000, 18000, 18000, 36000 ];
paper.조명용시트.uvCwc = [ 12000, 15000, 15000, 15000, 30000 ];

//LG투명시트 lg031G
paper.투명시트.solvent = [ 10000, 13000, 13000, 13000, 26000 ];
paper.투명시트.latex = [ 10000, 13000, 13000, 13000, 26000 ];
paper.투명시트.uvW = [ 9000, 12000, 12000, 12000, 24000 ];
paper.투명시트.uvC = [ 9000, 12000, 12000, 12000, 24000 ];
paper.투명시트.uvCw = [ 12000, 15000, 15000, 15000, 30000 ];
paper.투명시트.uvCwc = [ 14000, 17000, 17000, 17000, 34000 ];

//엠보시트 embo
paper.엠보시트.solvent = [ 10000, 13000, 13000, 13000, 26000 ];
paper.엠보시트.latex = [ 10000, 13000, 13000, 13000, 26000 ];
paper.엠보시트.uvW = [ 9000, 12000, 12000, 12000, 24000 ];
paper.엠보시트.uvC = [ 9000, 12000, 12000, 12000, 24000 ];
paper.엠보시트.uvCw = [ 12000, 15000, 15000, 15000, 30000 ];
paper.엠보시트.uvCwc = [ 14000, 17000, 17000, 17000, 34000 ];

//고투명PET(유광점착]
paper.고투명점착시트.uvW = [ 9000, 12000, 12000, 12000, 24000 ];
paper.고투명점착시트.uvC = [ 9000, 12000, 12000, 12000, 24000 ];
paper.고투명점착시트.uvCw = [ 12000, 15000, 15000, 15000, 30000 ];
paper.고투명점착시트.uvCwc = [ 14000, 17000, 17000, 17000, 34000 ];

//고투명PET(비점착]
paper.고투명비점착시트.uvW = [ 9000, 12000, 12000, 12000, 24000 ];
paper.고투명비점착시트.uvC = [ 9000, 12000, 12000, 12000, 24000 ];
paper.고투명비점착시트.uvCw = [ 12000, 15000, 15000, 15000, 30000 ];
paper.고투명비점착시트.uvCwc = [ 14000, 17000, 17000, 17000, 34000 ];

//LG타공썬팅시트 lg50000
paper.타공썬팅시트.solvent = [ 27000, 32000, 32000, 32000, 64000 ];
paper.타공썬팅시트.latex = [ 27000, 32000, 32000, 32000, 64000 ];
paper.타공썬팅시트.uvC = [ 27000, 30000, 30000, 30000, 60000 ];

//LG타공채널시트 lg5300W
paper.타공채널시트.solvent = [ 27000, 32000, 32000, 32000, 64000 ];
paper.타공채널시트.latex = [ 27000, 32000, 32000, 32000, 64000 ];
paper.타공채널시트.uvC = [ 27000, 30000, 30000, 30000, 60000 ];

//반사시트 bansa
paper.반사시트.solvent = [ 20000, 23000, 23000, 23000, 46000 ];
paper.반사시트.latex = [ 20000, 23000, 23000, 23000, 46000 ];

//고무자석시트 rubber
paper.고무자석.uvC = [ 11000, 20000 ];

//조명후렉스  0_출력만 1_출력만(장폭) 2_후렘제작  3_후렘제작(장폭) 
paper.조명후렉스.solvent = [ 5000, 9000, 4000, 8000 ];
paper.조명후렉스.solventFull = [ 6000, 10000, 5000, 9000 ];
paper.조명후렉스.latex = [ 7000, 11000, 6000, 10000 ];
paper.조명후렉스.latexFull = [ 8000, 12000, 7000, 11000 ];
paper.조명후렉스.uvC = [ 5000, 8000 , 4000, 7000 ];
paper.조명후렉스.uvCwc = [ 7000, 10000, 6000, 9000 ];
paper.조명후렉스.uvCc = [ 6000, 9000, 5000, 8000 ];
paper.조명후렉스.uvBlack = [ 8000, 11000, 7000, 10000 ];

//그레이후렉스 
paper.비조명후렉스.solvent = [ 5000, 9000, 4000, 8000 ];
paper.비조명후렉스.latex = [ 7000, 11000, 6000, 10000 ];
paper.비조명후렉스.uvC = [ 5000, 8000, 4000, 7000 ];

//메쉬천 
paper.메쉬천.solvent = [ 8000, 8000 ];
paper.메쉬천.latex = [ 10000 , 12000 ];
paper.메쉬천.uvC = [ 7000, 10000 ];

//현수막 90폭 미만 
paper.현수막90폭.water = [ 2000, 4000, 6000, 7000, 8000, 10000 ];
paper.현수막90폭.uvC = [ 5000, 8000, 14000, 18000, 22000, 25000 ];

//현수막 100폭 cloth_100
paper.현수막100폭.water = [ 2500, 4500, 7000, 9000, 10000, 12500 ];
paper.현수막100폭.uvC = [ 5500, 8500, 15000, 19500, 24000, 27500 ];

//현수막 106폭 cloth_106
paper.현수막106폭.water = [ 3000, 5000, 8000, 11000, 12000, 15000 ];
paper.현수막106폭.uvC = [ 6000, 9000, 16000, 21000, 26000, 30000 ];

//현수막 110폭 cloth_110
paper.현수막110폭.water = [ 3000, 5000, 8000, 11000, 12000, 15000 ];
paper.현수막110폭.uvC = [ 6000, 9000, 16000, 21000, 26000, 30000 ];

//현수막 120폭 cloth_120
paper.현수막120폭.water = [ 3500, 5500, 9000, 12000, 14000, 17500 ];
paper.현수막120폭.uvC = [ 6500, 9500, 17000, 22500, 28000, 32500 ];

//현수막 127폭 cloth_127
paper.현수막127폭.water = [ 4000, 6000, 10000, 13000, 16000, 20000 ];
paper.현수막127폭.uvC = [ 7000, 10000, 18000, 24000, 30000, 35000 ];

//현수막 130폭 cloth_130
paper.현수막130폭.water = [ 4000, 6000, 10000, 13000, 16000, 20000 ];
paper.현수막130폭.uvC = [ 7000, 10000, 18000, 24000, 30000, 35000 ];

//현수막 140폭 cloth_140
paper.현수막140폭.water = [ 4500, 6500, 11000, 15000, 18000, 22500 ];
paper.현수막140폭.uvC = [ 8000, 11000, 20000, 27000, 34000, 40000 ];

//현수막 152폭 cloth_152
paper.현수막152폭.water = [ 4500, 6500, 11000, 15000, 18000, 22500 ];
paper.현수막152폭.uvC = [ 8000, 11000, 20000, 27000, 34000, 40000 ];

//현수막 160폭 cloth_160
paper.현수막160폭.water = [ 5000, 7000, 14000, 17000, 20000, 25000 ];
paper.현수막160폭.uvC = [ 9000, 12000, 22000, 30000, 38000, 45000 ];

//현수막 180폭 cloth_180
paper.현수막180폭.water = [ 5500, 8000, 16000, 19000, 22000, 27500 ];
paper.현수막180폭.uvC = [ 10000, 13000, 24000, 33000, 42000, 50000 ];

//현수막 200폭 cloth_200
paper.현수막200폭.uvC = [ 12000, 15000, 28000, 39000, 50000, 60000 ];

//현수막 250폭 cloth_250
paper.현수막250폭.uvC = [ 16000, 19000, 36000, 51000, 66000, 80000 ];

//현수막 320폭 cloth_320
paper.현수막320폭.uvC = [ 20000, 23000, 44000, 63000, 82000, 100000 ];

//현수막 저가5장이상 cloth_90c5
paper.동일데이터_저가5장이상.water = [ 1200, 3000, 3500, 4800, 5600, 6000 ];

//현수막 저가10장이상 cloth_90c10
paper.동일데이터_저가10장이상.water = [ 700, 2500, 3000, 3200, 3400, 3500 ];

//현수막 보급5장이상 cloth_90n5
paper.동일데이터_보급5장이상.water = [ 1300, 3500, 4000, 5100, 6000, 6500 ];

//현수막 보급10장이상 cloth_90n10
paper.동일데이터_보급10장이상.water = [ 900, 2800, 3300, 3500, 4100, 4500 ];

//텐트천 90폭 미만 tent_90   ------------------------텐트천 수성단가는 확인후 수정할것 2021-01-14
paper.텐트천90폭.water = [ 2000, 4000, 6000, 7000, 8000, 10000 ];
paper.텐트천90폭.uvC = [ 7000, 10000, 18000, 24000, 30000, 35000 ];

//텐트천 100폭 tent_100
paper.텐트천100폭.water = [ 2500, 4500, 7000, 9000, 10000, 12500 ];
paper.텐트천100폭.uvC = [ 7500, 10500, 19000, 25500, 32000, 37500 ];

//텐트천 106폭 tent_106
paper.텐트천106폭.water = [ 3000, 5000, 8000, 11000, 12000, 15000 ];
paper.텐트천106폭.uvC = [ 8000, 11000, 20000, 27000, 34000, 40000 ];

//텐트천 110폭 tent_110
paper.텐트천110폭.water = [ 3000, 5000, 8000, 11000, 12000, 15000 ];
paper.텐트천110폭.uvC = [ 8000, 11000, 20000, 27000, 34000, 40000 ];

//텐트천 120폭 tent_120
paper.텐트천120폭.water = [ 3500, 5500, 9000, 12000, 14000, 17500 ];
paper.텐트천120폭.uvC = [ 8500, 11500, 21000, 28500, 36000, 42500 ];

//텐트천 127폭 cloth_127
paper.텐트천127폭.water = [ 4000, 6000, 10000, 13000, 16000, 20000 ];
paper.텐트천127폭.uvC = [ 9000, 12000, 22000, 30000, 38000, 45000 ];

//텐트천 130폭 tent_130
paper.텐트천130폭.water = [ 4000, 6000, 10000, 13000, 16000, 20000 ];
paper.텐트천130폭.uvC = [ 9000, 12000, 22000, 30000, 38000, 45000 ];

//텐트천 140폭 tent_140
paper.텐트천140폭.water = [ 4500, 6500, 11000, 15000, 18000, 22500 ];
paper.텐트천140폭.uvC = [ 11000, 14000, 26000, 36000, 46000, 55000 ];

//텐트천 152폭 tent_152
paper.텐트천152폭.water = [ 4500, 6500, 11000, 15000, 18000, 22500 ];
paper.텐트천152폭.uvC = [ 11000, 14000, 26000, 36000, 46000, 55000 ];

//텐트천 160폭 tent_160
paper.텐트천160폭.water = [ 5000, 7000, 14000, 17000, 20000, 25000 ];
paper.텐트천160폭.uvC = [ 12000, 15000, 38000, 39000, 50000, 60000 ];

//텐트천 180폭 tent_180
paper.텐트천180폭.water = [ 5500, 8000, 16000, 19000, 22000, 27500];
paper.텐트천180폭.uvC = [ 13000, 16000, 30000, 42000, 54000, 65000 ];

//텐트천 200폭 tent_200
paper.텐트천200폭.uvC = [ 15000, 18000, 34000, 48000, 62000, 75000 ];

//텐트천 250폭 tent_250
paper.텐트천250폭.uvC = [ 20000, 23000, 44000, 63000, 82000, 100000 ];

//대형헤베당 단가
paper.대형현수막.water = [ 3000, 3000 ];
paper.대형현수막.uvC = [ 6500, 5500 ]; 
paper.대형텐트천.water = [ 3000, 3000 ]; //단가확인해서 입력할것
paper.대형텐트천.uvC = [ 8500, 7500 ]; 

// 헤베구하기
function findHebe(width, length){
    
        let hebe;
        if ( width >= 100) {
            if ( length >= 100) { //가로세로모두 1m이상인 경우                
                hebe = Math.ceil( width * length / 10000 * 100 ) / 100; //소수점2자리 까지 구함
            } else { //가로는 1미터 이상이나 세로는 1미터 미만인 경우
                hebe = Math.ceil( width * 1 / 100 * 100) / 100;
            }
        } else { //가로가 1미터 미만인경우
            if ( length >= 100 ) { // 가로가 1미터 미만이고 세로는 1미터 이상인경우
                hebe = Math.ceil( 1 * length / 100 * 100 ) / 100;
            } else { //가로세로모두 1미터 미만인 경우
                hebe = 1;
            }
        }
        return hebe;    
}

// 가격 구하기
function findPrice( sheet, mode ) {
    
    let price_water;
    let price_solvent, price_latex, price_solventFull, price_latexFull;
    let price_uvW, price_uvC, price_uvCw;
    let price_uvCwc, price_uvCc, price_uvBlack;
    
    try{
        let ink = paper[sheet]['water'][mode];
        ink === NaN || ink === undefined
            ? price_water = 0    
            : price_water = ink
    }catch(e){
        price_water = 0
        // console.log('water : ' + e)
    }
    try{ 
        let ink = paper[sheet]['solvent'][mode];
        ink === NaN || ink === undefined 
            ? price_solvent = 0    
            : price_solvent = ink            
    }catch(e){
        price_solvent = 0
        // console.log('solvent : ' + e)
    }
    try{ 
        let ink = paper[sheet]['solventFull'][mode];
        ink === NaN || ink === undefined 
            ? price_solventFull = 0    
            : price_solventFull = ink
    }catch(e){
        price_solventFull = 0
        // console.log('solventFull : ' + e)
    }
    try{
        let ink = paper[sheet]['latex'][mode];
        ink === NaN || ink === undefined                
            ? price_latex = 0
            : price_latex = ink
    }catch(e){
        price_latex = 0
        // console.log('latex : ' + e)
    }
    try{
        let ink = paper[sheet]['latexFull'][mode];
        ink === NaN || ink === undefined                
            ? price_latexFull = 0
            : price_latexFull = ink
    }catch(e){
        price_latexFull = 0
        // console.log('latexFull : ' + e)
    }
    try{
        let ink = paper[sheet]['uvW'][mode];
        ink === NaN || ink === undefined            
            ? price_uvW = 0
            : price_uvW = ink
    }catch(e){
        price_uvW = 0
        // console.log('uvW : ' + e)
    }
    try{
        let ink = paper[sheet]['uvC'][mode];
        ink === NaN || ink === undefined            
            ? price_uvC = 0
            : price_uvC = ink
    }catch(e){
        price_uvC = 0
        // console.log(' uvC: ' + e)
    }
    try{
        let ink = paper[sheet]['uvCw'][mode];
        ink === NaN || ink === undefined            
            ? price_uvCw = 0
            : price_uvCw = ink
    }catch(e){
        price_uvCw = 0
        // console.log(' uvCw: ' + e)
    }
    try{
        let ink = paper[sheet]['uvCwc'][mode];
        ink === NaN || ink === undefined            
            ? price_uvCwc = 0
            : price_uvCwc = ink
    }catch(e){
        price_uvCwc = 0
        // console.log(' uvCwc: ' + e)
    }
    try{
        let ink = paper[sheet]['uvCc'][mode];
        ink === NaN || ink === undefined            
            ? price_uvCc = 0
            : price_uvCc = ink
    }catch(e){
        price_uvCc = 0
        // console.log(' uvCc: ' + e)
    }
    try{
        let ink = paper[sheet]['uvBlack'][mode];
        ink === NaN || ink === undefined    
            ? price_black = 0
            : price_uvBlack = ink
    }catch(e){
        price_uvBlack = 0
        // console.log(' uvBlack: ' + e)
    }
    
    return {     
        'water': price_water,
        'solvent': price_solvent,
        'solventFull': price_solventFull,
        'latex': price_latex,
        'latexFull': price_latexFull,
        'uvW': price_uvW,
        'uvC': price_uvC,
        'uvCw': price_uvCw,
        'uvCwc': price_uvCwc,
        'uvCc': price_uvCc,
        'uvBlack': price_uvBlack,          
    };     
}

// 시트가격 구하기
function findSheet( width, length, sheet, mode ) {
        
    let price = findPrice( sheet, mode );
    let hebe = findHebe(width, length);
    
    let err
    return {        
        'hebe': hebe,
        'price_water': price.water * hebe,
        'price_solvent': price.solvent * hebe,
        'price_solventFull': price.solventFull * hebe,
        'price_latex': price.latex * hebe,
        'price_latexFull': price.latexFull * hebe,
        'price_uvW': price.uvW * hebe,
        'price_uvC': price.uvC * hebe,
        'price_uvCw': price.uvCw * hebe,
        'price_uvCwc': price.uvCwc * hebe,
        'price_uvCc': price.uvCc * hebe,
        'price_uvBlack': price.uvBlack * hebe,          
        'err': err
    };     
}



// 후레임가격 구하기
function findFrame( width, length, sheet, mode ){
        
    let newMode;    
    //조명후렉스  0_출력만 1_출력만(장폭) 2_후렘제작  3_후렘제작(장폭) 
    
    width < 220 ? newMode = mode : newMode = Number(mode) + 1 ;
    
    let price = findPrice( sheet, newMode );
    let hebe = findHebe(width, length);
    
    let err

    return {        
        'hebe': hebe,
        'price_water': price.water * hebe,
        'price_solvent': price.solvent * hebe,
        'price_solventFull': price.solventFull * hebe,
        'price_latex': price.latex * hebe,
        'price_latexFull': price.latexFull * hebe,
        'price_uvW': price.uvW * hebe,
        'price_uvC': price.uvC * hebe,
        'price_uvCw': price.uvCw * hebe,
        'price_uvCwc': price.uvCwc * hebe,
        'price_uvCc': price.uvCc * hebe,
        'price_uvBlack': price.uvBlack * hebe,   
        'err': err       
    };     
}
// 현수막가격 구하기
function findCloth( length, sheet, mode ) { //현수막은 sheet값을 cloth + 원단폭값을 합한것으로 받는다.
    
    let price, price2;
    let water;
    let solvent, latex, solventFull, latexFull;
    let uvW, uvC, uvCw;
    let uvCwc, uvCc, uvBlack;
    
    if ( length >= 500 ){  //길이가 5미터 이상일 경우
        
        Number(mode.slice(0,-1)) < 90 
            ? price = findPrice( sheet + '90폭', 0)
            : price = findPrice( sheet + mode, 0)        
        
        let lens = ( Math.ceil(length / 100 * 10) / 10 ) //길이를 미터로 변환, 10단위 올려서 버림한후 원래 값으로

        water = price.water * lens
        solvent = price.solvent * lens
        solventFull = price.solventFull * lens
        latex = price.latex * lens
        latexFull = price.latexFull * lens
        uvW = price.uvW * lens
        uvC = price.uvC * lens
        uvCw = price.uvCw * lens
        uvCwc = price.uvCwc * lens
        uvCc = price.uvCc * lens
        uvBlack = price.uvBlack * lens

    }else{ //길이가 5미터 이하일 경우

        let m = parseInt(length / 100); // 길이가 5미터 이하면 1, 2, 3, 4미터일때의 각각의 단가 호출
        let intM = length % 100; // m단위 아래 남은 cm
        let plusM = Math.ceil( intM / 10 ); // 남은 cm미터의 10cm단위의 숫자
        
        if ( Number(mode.slice(0,-1)) < 90 ){
            price = findPrice( sheet + '90폭', m)
            price2 = findPrice( sheet + '90폭', m+1 );
        }else{
            price = findPrice( sheet + mode, m)
            price2 = findPrice( sheet + mode, m+1 );
        }

        if ( intM > 0 ){
            
            water = price.water + ( plusM * ( price2.water - price.water) / 10 )
            solvent = price.solvent + ( plusM * ( price2.solvent - price.solvent) / 10 )
            solventFull = price.solventFull + ( plusM * ( price2.solventFull - price.solventFull) / 10 )
            latex = price.latex + ( plusM * ( price2.latex - price.latex) / 10 )
            latexFull = price.latexFull + ( plusM * ( price2.latexFull - price.latexFull) / 10 )
            uvW = price.uvW + ( plusM * ( price2.uvW - price.uvW) / 10 )
            uvC = price.uvC + ( plusM * ( price2.uvC - price.uvC) / 10 )
            uvCw = price.uvCw + ( plusM * ( price2.uvCw - price.uvCw) / 10 )
            uvCwc = price.uvCwc + ( plusM * ( price2.uvCwc - price.uvCwc) / 10 )
            uvCc = price.uvCc + ( plusM * ( price2.uvCc - price.uvCc) / 10 )
            uvBlack = price.uvBlack + ( plusM * ( price2.uvBlack - price.uvBlack) / 10 )

        }else{            
            water = price.water
            solvent = price.solvent
            solventFull = price.solventFull
            latex = price.latex
            latexFull = price.latexFull
            uvW = price.uvW
            uvC = price.uvC
            uvCw = price.uvCw
            uvCwc = price.uvCwc
            uvCc = price.uvCc
            uvBlack = price.uvBlack
        }        
    }
    
    let err

    return {        
        'hebe': '-',
        'price_water': water,
        'price_solvent': solvent,
        'price_solventFull': solventFull,
        'price_latex': latex,
        'price_latexFull': latexFull,
        'price_uvW': uvW,
        'price_uvC': uvC,
        'price_uvCw': uvCw,
        'price_uvCwc': uvCwc,
        'price_uvCc': uvCc,
        'price_uvBlack': uvBlack,          
        'err': err
    };  
}

//현수막동일데이터 단가구하기  옵션에서 저가/보급/수량/동일내용이 지정되어야함
function findClothSameData( length, ea, sheet  ) {

    let water;
    let solvent, latex, solventFull, latexFull;
    let uvW, uvC, uvCw;
    let uvCwc, uvCc, uvBlack;
    
    let lastSheet; //시트 이름뒤에 붙는 수식어
    let m = Math.ceil( length /100 * 10 ) / 10; //m값구하기    
    
    if ( ea < 10 && ea >= 5 ){ // 동일데이터_보급5장이상
        lastSheet = sheet + '5장이상';
    }else if ( ea >= 10 ){
        lastSheet = sheet + '10장이상';        
    }
        
    let price_1M = findPrice( lastSheet , 1);
    let price_2M = findPrice( lastSheet , 2);
    let price_3M = findPrice( lastSheet , 3);
    let price_4M = findPrice( lastSheet , 4);
    let price_5M = findPrice( lastSheet , 5);
    let price_basic = findPrice( lastSheet , 0);

    if ( m > 0 && m < 1.8) {          

        water = price_1M.water
        solvent = price_1M.solvent
        solventFull = price_1M.solventFull
        latex = price_1M.latex
        latexFull = price_1M.latexFull
        uvW = price_1M.uvW
        uvC = price_1M.uvC
        uvCw = price_1M.uvCw
        uvCwc = price_1M.uvCwc
        uvCc = price_1M.uvCc
        uvBlack = price_1M.uvBlack

    } else if ( m >= 1.8 && m < 2.8) { 

        water = price_2M.water
        solvent = price_2M.solvent
        solventFull = price_2M.solventFull
        latex = price_2M.latex
        latexFull = price_2M.latexFull
        uvW = price_2M.uvW
        uvC = price_2M.uvC
        uvCw = price_2M.uvCw
        uvCwc = price_2M.uvCwc
        uvCc = price_2M.uvCc
        uvBlack = price_2M.uvBlack
        
    } else if ( m >= 2.8 && m < 3.8) { 

        water = price_3M.water
        solvent = price_3M.solvent
        solventFull = price_3M.solventFull
        latex = price_3M.latex
        latexFull = price_3M.latexFull
        uvW = price_3M.uvW
        uvC = price_3M.uvC
        uvCw = price_3M.uvCw
        uvCwc = price_3M.uvCwc
        uvCc = price_3M.uvCc
        uvBlack = price_3M.uvBlack

    } else if ( m >= 3.8 && m < 4.8) { 

        water = price_4M.water
        solvent = price_4M.solvent
        solventFull = price_4M.solventFull
        latex = price_4M.latex
        latexFull = price_4M.latexFull
        uvW = price_4M.uvW
        uvC = price_4M.uvC
        uvCw = price_4M.uvCw
        uvCwc = price_4M.uvCwc
        uvCc = price_4M.uvCc
        uvBlack = price_4M.uvBlack

    } else if ( m >= 4.8 && m < 5) { 
        
        water = price_5M.water
        solvent = price_5M.solvent
        solventFull = price_5M.solventFull
        latex = price_5M.latex
        latexFull = price_5M.latexFull
        uvW = price_5M.uvW
        uvC = price_5M.uvC
        uvCw = price_5M.uvCw
        uvCwc = price_5M.uvCwc
        uvCc = price_5M.uvCc
        uvBlack = price_5M.uvBlack

    } else { 
        
        water = price_basic.water * m
        solvent = price_basic.solvent * m
        solventFull = price_basic.solventFull * m
        latex = price_basic.latex * m
        latexFull = price_basic.latexFull * m
        uvW = price_basic.uvW * m
        uvC = price_basic.uvC * m
        uvCw = price_basic.uvCw * m
        uvCwc = price_basic.uvCwc * m
        uvCc = price_basic.uvCc * m
        uvBlack = price_basic.uvBlack * m
    }
    
    let err

    return {        
        'hebe': '-',
        'price_water': water,
        'price_solvent': solvent,
        'price_solventFull': solventFull,
        'price_latex': latex,
        'price_latexFull': latexFull,
        'price_uvW': uvW,
        'price_uvC': uvC,
        'price_uvCw': uvCw,
        'price_uvCwc': uvCwc,
        'price_uvCc': uvCc,
        'price_uvBlack': uvBlack,          
        'err': err
    };  

}

// 합폭현수막가격 구하기  mode : 0_기본가격, 1_30헤베이상
function findClothPlus( width, length, sheet ) {
    
    let mode;
        
    width * length / 10000 >= 30 
        ? mode = 1
        : mode = 0

    let price = findPrice( sheet , mode);
    let hebe = findHebe( width, length );

    let err

    return {        
        'hebe': hebe,
        'price_water': price.water * hebe,
        'price_solvent': price.solvent * hebe,
        'price_solventFull': price.solventFull * hebe,
        'price_latex': price.latex * hebe,
        'price_latexFull': price.latexFull * hebe,
        'price_uvW': price.uvW * hebe,
        'price_uvC': price.uvC * hebe,
        'price_uvCw': price.uvCw * hebe,
        'price_uvCwc': price.uvCwc * hebe,
        'price_uvCc': price.uvCc * hebe,
        'price_uvBlack': price.uvBlack * hebe,          
        'err': err
    };  
    
    
}

// 고무자석격 구하기  mode : 0_60폭가격, 1_100폭가격
function findRubber( length, sheet, mode) {
    
    let price = findPrice( sheet , mode);
    
    let err

    return {        
        'hebe': '-',
        'price_water': price.water * (length / 100 ),
        'price_solvent': price.solvent * (length / 100),
        'price_solventFull': price.solventFull * (length / 100),
        'price_latex': price.latex * (length / 100),
        'price_latexFull': price.latexFull * (length / 100),
        'price_uvW': price.uvW * (length / 100),
        'price_uvC': price.uvC * (length / 100),
        'price_uvCw': price.uvCw * (length / 100),
        'price_uvCwc': price.uvCwc * (length / 100),
        'price_uvCc': price.uvCc * (length / 100),
        'price_uvBlack': price.uvBlack * (length / 100),  
        'err': err      
    };  
    
}




function numComma(x) { //숫자 자리에 콤마넣기
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} 


function aa(){
    
    // let dd = findSheet( 100, 100, 2, '일반시트', 1 );
    // let dd = findCloth( 90, 380, '현수막', '90폭' )
    // let dd = findClothSameData( 560, 14, '동일데이터_저가'  )
    let dd =findClothPlus( 100, 300, '대형텐트천')

    console.log('width :' + dd.width);
    console.log('length: ' + dd.length);
    console.log('hebe: ' + dd.hebe);
    console.log('price_water :'+ dd.price_water);
    console.log('price_solvent : ' + dd.price_solvent);    
    console.log('price_solventFull : ' + dd.price_solventFull);    
    console.log('price_latex : ' + dd.price_latex);
    console.log('price_latexFull : ' + dd.price_latexFull);
    console.log('price_uvW :' + dd.price_uvW);
    console.log('price_uvC :' + dd.price_uvC);
    console.log('price_uvCw :' + dd.price_uvCw);
    console.log('price_uvCwc : ' + dd.price_uvCwc);
    console.log('price_uvCc :' + dd.price_uvCc);
    console.log('price_uvBlack :' + dd.price_uvBlack);  
    console.log('-----------------------------')
    paper.일반시트.price()
}
