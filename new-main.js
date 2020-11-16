class Paper_sheet {    
    constructor( only, matte, shiny, uv, both_sides ){    
        this.only = only;             // 출력만 : only_print
        this.matte = matte;           // 무광코팅 : matte_coating
        this.shiny = shiny;           // 유광코팅 : shiny_coating
        this.uv = uv;                 // 유브이코팅 : uv_coating
        this.both_sides = both_sides; // 양면코팅 : both_sides_coating
    }
}
class Paper_cloth {    
    constructor( basic, meter1, meter2, meter3, meter4, meter5 ){    
        this.basic = basic;             // 기본m단가 : basic
        this.meter1 = meter1;           // 1미터미만단가 : meter1
        this.meter2 = meter2;           // 2미터미만단가 : meter2
        this.meter3 = meter3;           // 3미터미만단가 : meter3
        this.meter4 = meter4;           // 4미터미만단가 : meter4
        this.meter5 = meter5;           // 5미터미만단가 : meter5
    }
}

class Paper_frame {    
    constructor( no_making, no_making_full, making, making_full ){    
        this.no_making = no_making;             // 제작없이 출력만
        this.no_making_full = no_making_full;   // 제작없이 출력(누끼)
        this.making = making;                   // 후렘제작 출력만
        this.making_full = making_full;         // 후렘제작 출력(누끼)
    }
}

//유포지 upo
const upo = new Object();
upo.water = new Paper_sheet( 6000, 8000, 8000, 9000, 18000 );
upo.week_solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
upo.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
upo.latex = new Paper_sheet( 0, 0, 0, 0, 0 );
upo.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
upo.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
upo.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
upo.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//유포그레이 upo_grey
const upo_grey = new Object();  
upo_grey.water = new Paper_sheet( 8000, 10000, 10000, 11000, 20000 );
upo_grey.week_solvent= new Paper_sheet( 0, 0, 0, 0, 0 );
upo_grey.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
upo_grey.latex = new Paper_sheet( 0, 0, 0, 0, 0 );
upo_grey.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
upo_grey.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
upo_grey.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
upo_grey.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//켈지 kel
const kel = new Object();
kel.water = new Paper_sheet( 8000, 10000, 10000, 11000, 20000 );
kel.week_solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
kel.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
kel.latex = new Paper_sheet( 0, 0, 0, 0, 0 );
kel.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
kel.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
kel.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
kel.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//켈그레이 kel_grey
const kel_grey = new Object();  
kel_grey.water = new Paper_sheet(10000, 12000, 12000, 13000, 24000 );
kel_grey.week_solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
kel_grey.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
kel_grey.latex = new Paper_sheet( 0, 0, 0, 0, 0 );
kel_grey.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
kel_grey.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
kel_grey.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
kel_grey.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//패트지 pet
const pet = new Object();
pet.water = new Paper_sheet( 8000, 10000, 10000, 11000, 20000 );
pet.week_solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
pet.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
pet.latex = new Paper_sheet( 0, 0, 0, 0, 0 );
pet.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
pet.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
pet.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
pet.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//와이트칼라 wide_color
const wide_color = new Object();
wide_color.water = new Paper_sheet( 13000, 15000, 15000, 16000, 30000 );
wide_color.week_solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
wide_color.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
wide_color.latex = new Paper_sheet( 0, 0, 0, 0, 0 );
wide_color.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
wide_color.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
wide_color.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
wide_color.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//LG일반시트 LG011G
const LG011G = new Object();
LG011G.water = new Paper_sheet( 0, 0, 0, 0, 0 );
LG011G.week_solvent = new Paper_sheet( 7000, 10000, 10000, 10000, 20000 );
LG011G.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
LG011G.latex = new Paper_sheet( 7000, 10000, 10000, 10000, 20000 );
LG011G.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
LG011G.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
LG011G.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
LG011G.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//LG철판시트 LG032G
const LG032G = new Object();
LG032G.water = new Paper_sheet( 0, 0, 0, 0, 0 );
LG032G.week_solvent = new Paper_sheet( 9000, 12000, 12000, 12000, 24000 );
LG032G.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
LG032G.latex = new Paper_sheet( 9000, 12000, 12000, 12000, 24000 );
LG032G.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
LG032G.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
LG032G.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
LG032G.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//LG차량용시트 LG035G
const LG035G = new Object();
LG035G.water = new Paper_sheet( 0, 0, 0, 0, 0 );
LG035G.week_solvent = new Paper_sheet( 9000, 12000, 12000, 12000, 24000 );
LG035G.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
LG035G.latex = new Paper_sheet( 9000, 12000, 12000, 12000, 24000 );
LG035G.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
LG035G.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
LG035G.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
LG035G.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//LG조명용시트 LGSPT031M
const LGSPT031M = new Object();
LGSPT031M.water = new Paper_sheet( 0, 0, 0, 0, 0 );
LGSPT031M.week_solvent = new Paper_sheet( 15000, 18000, 18000, 18000, 36000 );
LGSPT031M.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
LGSPT031M.latex = new Paper_sheet( 15000, 18000, 18000, 18000, 36000 );
LGSPT031M.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
LGSPT031M.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
LGSPT031M.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
LGSPT031M.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//LG투명시트 LG031G
const LG031G = new Object();
LG031G.water = new Paper_sheet( 0, 0, 0, 0, 0 );
LG031G.week_solvent = new Paper_sheet( 10000, 13000, 13000, 13000, 26000 );
LG031G.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
LG031G.latex = new Paper_sheet( 10000, 13000, 13000, 13000, 26000 );
LG031G.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
LG031G.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
LG031G.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
LG031G.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//엠보시트 embo
const embo = new Object();
embo.water = new Paper_sheet( 0, 0, 0, 0, 0 );
embo.week_solvent = new Paper_sheet( 10000, 13000, 13000, 13000, 26000 );
embo.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
embo.latex = new Paper_sheet( 10000, 13000, 13000, 13000, 26000 );
embo.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
embo.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
embo.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
embo.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//LG타공썬팅시트 LG50000
const LG50000 = new Object();
LG50000.water = new Paper_sheet( 0, 0, 0, 0, 0 );
LG50000.week_solvent = new Paper_sheet( 27000, 32000, 32000, 32000, 64000 );
LG50000.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
LG50000.latex = new Paper_sheet( 27000, 32000, 32000, 32000, 64000 );
LG50000.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
LG50000.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
LG50000.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
LG50000.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//LG타공채널시트 LG5300W
const LG5300W = new Object();
LG5300W.water = new Paper_sheet( 0, 0, 0, 0, 0 );
LG5300W.week_solvent = new Paper_sheet( 27000, 32000, 32000, 32000, 64000 );
LG5300W.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
LG5300W.latex = new Paper_sheet( 27000, 32000, 32000, 32000, 64000 );
LG5300W.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
LG5300W.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
LG5300W.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
LG5300W.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//반사시트 bansasheet
const bansasheet = new Object();
bansasheet.water = new Paper_sheet( 0, 0, 0, 0, 0 );
bansasheet.week_solvent = new Paper_sheet( 20000, 23000, 23000, 23000, 46000 );
bansasheet.solvent = new Paper_sheet( 0, 0, 0, 0, 0 );
bansasheet.latex = new Paper_sheet( 20000, 23000, 23000, 23000, 46000 );
bansasheet.uv_w = new Paper_sheet( 0, 0, 0, 0, 0 );
bansasheet.uv_c = new Paper_sheet( 0, 0, 0, 0, 0 );
bansasheet.uv_cw = new Paper_sheet( 0, 0, 0, 0, 0 );
bansasheet.uv_cwc = new Paper_sheet( 0, 0, 0, 0, 0 );

//조명후렉스 lighting_flex
const lighting_flex = new Object(); //제작없이 출력만: no_making, 제작없이 출력만(누끼): no_making_full, 후렘제작 출력: making, 후렘제작 출력(누끼): making_full
lighting_flex.water = new Paper_frame( 0, 0, 0, 0 );
lighting_flex.week_solvent = new Paper_frame( 0, 0, 0, 0);
lighting_flex.solvent = new Paper_frame( 5000, 6000, 4000, 5000 );
lighting_flex.latex = new Paper_frame( 7000, 8000, 6000, 7000 );
lighting_flex.uv_w = new Paper_frame( 0, 0, 0, 0 );
lighting_flex.uv_c = new Paper_frame( 0, 0, 0, 0 );
lighting_flex.uv_cw = new Paper_frame( 0, 0, 0, 0 );
lighting_flex.uv_cwc = new Paper_frame( 0, 0, 0, 0 );

//조명후렉스(장폭) lighting_flex_big
const lighting_flex_big = new Object(); //제작없이 출력만: no_making, 제작없이 출력만(누끼): no_making_full, 후렘제작 출력: making, 후렘제작 출력(누끼): making_full
lighting_flex_big.water = new Paper_frame( 0, 0, 0, 0 );
lighting_flex_big.week_solvent = new Paper_frame( 0, 0, 0, 0);
lighting_flex_big.solvent = new Paper_frame( 9000, 10000, 8000, 9000 );
lighting_flex_big.latex = new Paper_frame( 11000, 12000, 10000, 11000 );
lighting_flex_big.uv_w = new Paper_frame( 0, 0, 0, 0 );
lighting_flex_big.uv_c = new Paper_frame( 0, 0, 0, 0 );
lighting_flex_big.uv_cw = new Paper_frame( 0, 0, 0, 0 );
lighting_flex_big.uv_cwc = new Paper_frame( 0, 0, 0, 0 );

//그레이후렉스 grey_flex
const grey_flex = new Object(); //제작없이 출력만: no_making, 제작없이 출력만(누끼): no_making_full, 후렘제작 출력: making, 후렘제작 출력(누끼): making_full
grey_flex.water = new Paper_frame( 0, 0, 0, 0 );
grey_flex.week_solvent = new Paper_frame( 0, 0, 0, 0);
grey_flex.solvent = new Paper_frame( 5000, 6000, 4000, 5000 );
grey_flex.latex = new Paper_frame( 7000, 8000, 6000, 7000 );
grey_flex.uv_w = new Paper_frame( 0, 0, 0, 0 );
grey_flex.uv_c = new Paper_frame( 0, 0, 0, 0 );
grey_flex.uv_cw = new Paper_frame( 0, 0, 0, 0 );
grey_flex.uv_cwc = new Paper_frame( 0, 0, 0, 0 );

//그레이후렉스(장폭) grey_flex_big
const grey_flex_big = new Object(); //제작없이 출력만: no_making, 제작없이 출력만(누끼): no_making_full, 후렘제작 출력: making, 후렘제작 출력(누끼): making_full
grey_flex_big.water = new Paper_frame( 0, 0, 0, 0 );
grey_flex_big.week_solvent = new Paper_frame( 0, 0, 0, 0);
grey_flex_big.solvent = new Paper_frame( 9000, 10000, 8000, 9000 );
grey_flex_big.latex = new Paper_frame( 11000, 12000, 10000, 11000 );
grey_flex_big.uv_w = new Paper_frame( 0, 0, 0, 0 );
grey_flex_big.uv_c = new Paper_frame( 0, 0, 0, 0 );
grey_flex_big.uv_cw = new Paper_frame( 0, 0, 0, 0 );
grey_flex_big.uv_cwc = new Paper_frame( 0, 0, 0, 0 );

//메쉬천 mesh_flex
const mesh_flex = new Object(); //제작없이 출력만: no_making, 제작없이 출력만(누끼): no_making_full, 후렘제작 출력: making, 후렘제작 출력(누끼): making_full
mesh_flex.water = new Paper_frame( 0, 0, 0, 0 );
mesh_flex.week_solvent = new Paper_frame( 0, 0, 0, 0);
mesh_flex.solvent = new Paper_frame( 8000, 0, 0, 0 );
mesh_flex.latex = new Paper_frame( 10000, 0, 0, 0 );
mesh_flex.uv_w = new Paper_frame( 0, 0, 0, 0 );
mesh_flex.uv_c = new Paper_frame( 0, 0, 0, 0 );
mesh_flex.uv_cw = new Paper_frame( 0, 0, 0, 0 );
mesh_flex.uv_cwc = new Paper_frame( 0, 0, 0, 0 );

//메쉬천(장폭) mesh_flex_big
const mesh_flex_big = new Object(); //제작없이 출력만: no_making, 제작없이 출력만(누끼): no_making_full, 후렘제작 출력: making, 후렘제작 출력(누끼): making_full
mesh_flex_big.water = new Paper_frame( 0, 0, 0, 0 );
mesh_flex_big.week_solvent = new Paper_frame( 0, 0, 0, 0);
mesh_flex_big.solvent = new Paper_frame( 8000, 0, 0, 0 );
mesh_flex_big.latex = new Paper_frame( 12000, 0, 0, 0 );
mesh_flex_big.uv_w = new Paper_frame( 0, 0, 0, 0 );
mesh_flex_big.uv_c = new Paper_frame( 0, 0, 0, 0 );
mesh_flex_big.uv_cw = new Paper_frame( 0, 0, 0, 0 );
mesh_flex_big.uv_cwc = new Paper_frame( 0, 0, 0, 0 );

//현수막 90폭 미만 cloth_90
const cloth_90 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_90.water = new Paper_cloth( 2000, 4000, 6000, 7000, 8000, 10000);
cloth_90.week_solvent = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_90.solvent = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_90.latex = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_90.uv_w = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_90.uv_c = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_90.uv_cw = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_90.uv_cwc = new Paper_cloth( 0, 0, 0, 0, 0, 0 );

//현수막 100폭 cloth_100
const cloth_100 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_100.water = new Paper_cloth( 2500, 4500, 7000, 9000, 10000, 12500);
cloth_100.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_100.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_100.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_100.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_100.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_100.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_100.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 106폭 cloth_106
const cloth_106 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_106.water = new Paper_cloth( 3000, 5000, 8000, 11000, 12000, 15000);
cloth_106.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_106.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_106.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_106.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_106.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_106.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_106.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 110폭 cloth_110
const cloth_110 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_110.water = new Paper_cloth( 3000, 5000, 8000, 11000, 12000, 15000);
cloth_110.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_110.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_110.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_110.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_110.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_110.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_110.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 120폭 cloth_120
const cloth_120 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_120.water = new Paper_cloth( 3500, 5500, 9000, 12000, 14000, 17500);
cloth_120.week_solvent = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_120.solvent = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_120.latex = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_120.uv_w = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_120.uv_c = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_120.uv_cw = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_120.uv_cwc = new Paper_cloth( 0, 0, 0, 0, 0, 0 );

//현수막 127폭 cloth_127
const cloth_127 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_127.water = new Paper_cloth( 4000, 6000, 10000, 13000, 16000, 20000);
cloth_127.week_solvent = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_127.solvent = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_127.latex = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_127.uv_w = new Paper_cloth( 0, 0, 0, 0, 0, 0 );
cloth_127.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_127.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_127.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 130폭 cloth_130
const cloth_130 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_130.water = new Paper_cloth( 4000, 6000, 10000, 13000, 16000, 20000);
cloth_130.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_130.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_130.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_130.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_130.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_130.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_130.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 140폭 cloth_140
const cloth_140 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_140.water = new Paper_cloth( 4500, 6500, 11000, 15000, 18000, 22500);
cloth_140.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_140.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_140.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_140.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_140.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_140.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_140.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 152폭 cloth_152
const cloth_152 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_152.water = new Paper_cloth( 4500, 6500, 11000, 15000, 18000, 22500);
cloth_152.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_152.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_152.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_152.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_152.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_152.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_152.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 160폭 cloth_160
const cloth_160 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_160.water = new Paper_cloth( 5000, 7000, 14000, 17000, 20000, 25000);
cloth_160.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_160.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_160.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_160.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_160.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_160.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_160.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 180폭 cloth_180
const cloth_180 = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_180.water = new Paper_cloth( 5500, 8000, 16000, 19000, 22000, 27500);
cloth_180.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_180.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_180.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_180.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_180.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_180.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_180.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 저가5장이상 cloth_cheap_5more
const cloth_cheap_5more = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_cheap_5more.water = new Paper_cloth( 1200, 3000, 3500, 4800, 5600, 6000 );
cloth_cheap_5more.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_5more.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_5more.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_5more.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_5more.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_5more.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_5more.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 저가10장이상 cloth_cheap_10more
const cloth_cheap_10more = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_cheap_10more.water = new Paper_cloth( 700, 2500, 3000, 3200, 3400, 3500 );
cloth_cheap_10more.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_10more.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_10more.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_10more.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_10more.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_10more.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_cheap_10more.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 보급5장이상 cloth_normally_5more
const cloth_normally_5more = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_normally_5more.water = new Paper_cloth( 1300, 3500, 4000, 5100, 6000, 6500 );
cloth_normally_5more.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_5more.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_5more.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_5more.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_5more.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_5more.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_5more.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

//현수막 보급10장이상 cloth_normally_10more
const cloth_normally_10more = new Object(); // 기본m단가 : basic, 1미터미만단가 : meter1, 2미터 : meter2, 3미터 : meter3, 4미터 : meter4, 5미터 : meter5
cloth_normally_10more.water = new Paper_cloth( 900, 2800, 3300, 3500, 4100, 4500 );
cloth_normally_10more.week_solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_10more.solvent = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_10more.latex = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_10more.uv_w = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_10more.uv_c = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_10more.uv_cw = new Paper_frame( 0, 0, 0, 0, 0, 0 );
cloth_normally_10more.uv_cwc = new Paper_frame( 0, 0, 0, 0, 0, 0 );

const cloth_big = 3000 //대형현수막 헤베당 단가

// 최종 원단 오브젝트 생성
const Paper_sheet_final = { 'upo': upo, 'upo_grey': upo_grey, 'kel': kel, 'kel_grey': kel_grey, 'pet': pet, 'wide_color': wide_color,
    'LG011G': LG011G, 'LG032G': LG032G, 'LG035G': LG035G, 'LGSPT031M': LGSPT031M, 'embo': embo, 'LG50000': LG50000, 'LG5300W': LG5300W, 
    'bansasheet': bansasheet, };

const Paper_frame_final = { 'lighting_flex': lighting_flex, 'lighting_flex_big': lighting_flex_big, 'grey_flex': grey_flex, 'grey_flex_big': grey_flex_big,
                            'mesh_flex': mesh_flex, 'mesh_flex_big': mesh_flex_big,  }

const Paper_cloth_final = { 'cloth_90': cloth_90, 'cloth_100': cloth_100, 'cloth_106': cloth_106, 'cloth_110': cloth_110, 'cloth_120': cloth_120,
                             'cloth_127': cloth_127, 'cloth_130': cloth_130, 'cloth_140': cloth_140, 'cloth_152': cloth_152, 'cloth_160': cloth_160,
                             'cloth_180': cloth_180, 'cloth_cheap_5more': cloth_cheap_5more, 'cloth_cheap_10more': cloth_cheap_10more, 
                             'cloth_normally_5more': cloth_normally_5more, 'cloth_normally_10more': cloth_normally_10more    }



// console.log(pat[water]['shiny_coating']);
const coat = 'uv_coating';
const mater = 'pet'
console.log(Paper_sheet_final[mater]['water'][coat]);
console.log(Paper_sheet_final.LG011G);
console.log(Paper_frame_final.mesh_flex_big.solvent.no_making);
console.log(Paper_frame_final['mesh_flex_big']['solvent']['no_making']);
console.log(Paper_cloth_final['cloth_127']['water']['meter3']);

// console.log(Paper_sheet_final);

// paperType, calCulate, metHod, imageWidth, imageLength, coUnt
// Price('수성', '현수막', 90, 500, 10, '동일데이터', '저가', '폭90' );

function Price( imageWidth, imageLength, imageEa, selected_paper, selected_method ) {
    
    let ink_water;
    let ink_week_solvent;
    let ink_solvent;
    let ink_latex;
    let ink_uv_c;
    let ink_uv_cw;
    let ink_uv_cwc;
    let ink_uv_w;

    if ( selected_paper === "대형현수막" ){

    } else if ( selected_paper === "일반현수막" ){

        let x = parseInt(imageLength / 100); //m값구하기
        let y = imageLength % 100; //나머지값구하기
        let z = Math.ceil( y / 10 ); //나머지값(원래는 *10을해서 같은자리를 만들겠지만 증감구간만 구하면 되기 때문에 생략함)
        // let end_price; //리턴할 값

        let m = 'meter' + x;
        let n = 'meter' + (x + 1);

        if (x < 5) {

            let water_one = Paper_cloth_final[selected_method]['water'][m];
            let water_two = Paper_cloth_final[selected_method]['water'][n];
            let week_solvent_one = Paper_cloth_final[selected_method]['week_solvent'][m];
            let week_solvent_two = Paper_cloth_final[selected_method]['week_solvent'][n];
            let solvent_one = Paper_cloth_final[selected_method]['solvent'][m];
            let solvent_two = Paper_cloth_final[selected_method]['solvent'][n];
            let latex_one = Paper_cloth_final[selected_method]['latex'][m];
            let latex_two = Paper_cloth_final[selected_method]['latex'][n];
            let uv_c_one = Paper_cloth_final[selected_method]['uv_c'][m];
            let uv_c_two = Paper_cloth_final[selected_method]['uv_c'][n];
            let uv_cw_one = Paper_cloth_final[selected_method]['uv_cw'][m];
            let uv_cw_two = Paper_cloth_final[selected_method]['uv_cw'][n];
            let uv_cwc_one = Paper_cloth_final[selected_method]['uv_cwc'][m];
            let uv_cwc_two = Paper_cloth_final[selected_method]['uv_cwc'][n];
            let uv_w_one = Paper_cloth_final[selected_method]['uv_w'][m];
            let uv_w_two = Paper_cloth_final[selected_method]['uv_w'][n];

            y === 0 ? ink_water = water_one : ink_water = water_one + (z * (water_two - water_one) / 10);  //정치수가 나오면                
            y === 0 ? ink_week_solvent = week_solvent_one : ink_week_solvent = week_solvent_one + (z * (week_solvent_two - week_solvent_one) / 10);
            y === 0 ? ink_solvent = solvent_one : ink_solvent = solvent_one + (z * (solvent_two - solvent_one) / 10);
            y === 0 ? ink_latex = latex_one : ink_latex = latex_one + (z * (latex_two - latex_one) / 10);
            y === 0 ? ink_uv_c = uv_c_one : ink_uv_c = uv_c_one + (z * (uv_c_two - uv_c_one) / 10);
            y === 0 ? ink_uv_cw = uv_cw_one : ink_uv_cw = uv_cw_one + (z * (uv_cw_two - uv_cw_one) / 10);
            y === 0 ? ink_uv_cwc = uv_cwc_one : ink_uv_cwc = uv_cwc_one + (z * (uv_cwc_two - uv_cwc_one) / 10);
            y === 0 ? ink_uv_w = uv_w_one : ink_uv_w = uv_w_one + (z * (uv_w_two - uv_w_one) / 10);

        } else {
            let p = Math.ceil(imageLength / 10) / 10 //예로 434cm경우 일의자리에서 올림한후 나누기 100을하면 4.4가 되어 단가와 바로 곱하면 됨             
            ink_water = p * Paper_cloth_final['water'][selected_method]['basic'];
            ink_week_solvent = p * Paper_cloth_final['week_solvent'][selected_method]['basic'];
            ink_solvent = p * Paper_cloth_final['solvent'][selected_method]['basic'];
            ink_latex = p * Paper_cloth_final['latex'][selected_method]['basic'];
            ink_uv_c = p * Paper_cloth_final['uv_c'][selected_method]['basic'];
            ink_uv_cw = p * Paper_cloth_final['uv_cw'][selected_method]['basic'];
            ink_uv_cwc = p * Paper_cloth_final['uv_cwc'][selected_method]['basic'];
            ink_uv_w = p * Paper_cloth_final['uv_w'][selected_method]['basic'];

        }
        

        WritePrice( ink_water, ink_week_solvent, ink_solvent, ink_latex, ink_uv_c, ink_uv_cw, ink_uv_cwc, ink_uv_w);


    } else if ( selected_paper === "동일저가" || selected_paper === "동일보급" ){

    } else if ( selected_paper === "조명후렉스" || selected_paper === "그레이후렉스" || selected_paper === "메쉬천" ){
    
    } else {

    }
}

// 웹에 입력하기
function WritePrice( ink_water, ink_week_solvent, ink_solvent, ink_latex, ink_uv_c, ink_uv_cw, ink_uv_cwc, ink_uv_w ){
    
    ink_water === undefined ?  this.ink_water = 0 : this.ink_water = numberWithCommas(ink_water);
    ink_week_solvent === undefined ?  this.ink_week_solvent = 0 : this.ink_week_solvent = numberWithCommas(ink_week_solvent);
    ink_solvent === undefined ?  this.ink_solvent = 0 : this.ink_solvent = numberWithCommas(ink_solvent);
    ink_latex === undefined ?  this.ink_latex = 0 : this.ink_latex = numberWithCommas(ink_latex);
    ink_uv_c === undefined ?  this.ink_uv_c = 0 : this.ink_uv_c = numberWithCommas(ink_uv_c);
    ink_uv_cw === undefined ?  this.ink_uv_cw = 0 : this.ink_uv_cw = numberWithCommas(ink_uv_cw);
    ink_uv_cwc === undefined ?  this.ink_uv_cwc = 0 : this.ink_uv_cwc = numberWithCommas(ink_uv_cwc);
    ink_uv_w === undefined ?  this.ink_uv_w = 0 : this.ink_uv_w = numberWithCommas(ink_uv_w);
    
    let price_data =  '<li>' + this.ink_water + '원</li><li>' + this.ink_week_solvent + '원</li><li>'
        + this.ink_solvent + '원</li><li>' + this.ink_latex + '원</li><li>' + this.ink_uv_c + '원</li><li>'
        + this.ink_uv_cw + '원</li><li>' + this.ink_uv_cwc + '원</li><li>' + this.ink_uv_w + '원</li><li>';

    document.getElementsByTagName('ul')[1].innerHTML = price_data;


}

function Prddice( imageWidth, imageLength, imageEa, selected_paper, selected_method ) {
    //잉크종류, 원단종류, 가로, 세로, 장수, 계산방법, 마감, 출력원단폭
    if ( selected_paper === "대형현수막" ){

    } else if ( selected_paper === "일반현수막" ){

        console.log(Paper_cloth_final[selected_method]['water']['meter3']);

    } else if ( selected_paper === "동일저가" || selected_paper === "동일보급" ){

    } else if ( selected_paper === "조명후렉스" || selected_paper === "그레이후렉스" || selected_paper === "메쉬천" ){
    
    } else {

    }

    let ea_price, end_price; // 개당단가, 최종가격

    for (let key in priceEA) {
        if (key === paperType) {
            //현수막에 동일데이터일 경우
            try {
                if (key === '현수막') {
                    switch (calCulate) {
                        case '헤베':
                            ea_price = priceEA[key][inkType]['헤베'];
                            break;
                        case '동일데이터':
                            if ((printWidth === "폭70" || printWidth === "폭90") && coUnt > 4) {
                                console.log('케이스동일데이터꺼지왔음')
                                ea_price = Colthsamedata(inkType, imageLength, coUnt, metHod);
                            } else {

                            }
                            break;
                        default:
                            ea_price = Colthprint(inkType, imageLength, printWidth);
                            break;
                    }
                }
                //후렉스 출력물인 경우
                else if (key === '조명후렉스' || key === '그레이후렉스' || key === '메쉬천') {

                    //220미만 단폭출력물인 경우
                    if (printWidth < 220) {
                        ea_price = priceEA[key]['소폭'][inkType][metHod];
                    }
                    //220이상 장폭출력물인 경우
                    else {
                        ea_price = priceEA[key]['장폭'][inkType][metHod];
                    }
                }
                //후렉스가 아닌 출력물
                else {
                    ea_price = priceEA[key][inkType][metHod];
                }
            } catch (e) {
                console.dir('Error:' + e);
            }
        }
    }

    if (calCulate === "헤베" || calCulate === "합폭") {
        let a;
        if (imageWidth >= 100) {
            if (imageLength >= 100) { //가로세로모두 1m이상인 경우                
                a = Math.ceil(imageWidth * imageLength / 10000 * 100) / 100;
            } else { //가로는 1미터 이상이나 세로는 1미터 미만인 경우
                a = Math.ceil(imageWidth * 1 / 100 * 100) / 100;
            }
        } else { //가로가 1미터 미만인경우
            if (imageLength >= 100) { // 가로가 1미터 미만이고 세로는 1미터 이상인경우
                a = Math.ceil(1 * imageLength / 100 * 100) / 100;
            } else { //가로세로모두 1미터 미만인 경우
                a = 1;
            }
        }
        end_price = coUnt * Math.ceil(a * ea_price / 100) * 100;
    } else { //현수막 처럼 단품계산시 적용
        end_price = coUnt * ea_price;
    }

    let hebe;
    if( imageWidth >= 100 && imageLength >=100){
        hebe = imageWidth * imageLength / 10000;    
    } else if(imageWidth < 100 && imageLength < 100){
        hebe = 1;
    }else {
        if(imageWidth<100){
            hebe = imageLength / 100;    
        }else{
            hebe = imageWidth  / 100;    
        }
    }

    let last_price = [hebe, ea_price, end_price]

    console.log('단가: ' + ea_price + '  헤베: ' + hebe + '  장수: ' + coUnt + '  계산방법: ' + calCulate);
    console.log('최종가격: ' + end_price);

    return last_price;

}



//현수막동일데이터 단가구하기
function Colthsamedata(inkType, imageLength, coUnt, metHod) {

    let x = parseInt(imageLength / 100); //m값구하기    
    let end_price; //리턴할 값    
    let t = Math.ceil(x * 10) / 10;

    if (coUnt >= 5 && coUnt < 10) {
        switch (metHod) {
            case '저가':
                if (x < 5) { //5미터미만경우            
                    if (t > 0 && t < 1.8) {
                        end_price = priceEA['현수막'][inkType]['저가5장']['미터1'];
                    } else if (t >= 1.8 && t < 2.8) {
                        end_price = priceEA['현수막'][inkType]['저가5장']['미터2'];
                    } else if (t >= 2.8 && t < 3.8) {
                        end_price = priceEA['현수막'][inkType]['저가5장']['미터3'];
                    } else if (t >= 3.8 && t < 4.8) {
                        end_price = priceEA['현수막'][inkType]['저가5장']['미터4'];
                    } else {
                        end_price = priceEA['현수막'][inkType]['저가5장']['미터5'];
                    }
                } else {
                    end_price = t * priceEA['현수막'][inkType]['저가5장']['기본가'];
                }
                break;
            case '일반':
                if (x < 5) { //5미터미만경우            
                    if (t > 0 && t < 1.8) {
                        end_price = priceEA['현수막'][inkType]['보급5장']['미터1'];
                    } else if (t >= 1.8 && t < 2.8) {
                        end_price = priceEA['현수막'][inkType]['보급5장']['미터2'];
                    } else if (t >= 2.8 && t < 3.8) {
                        end_price = priceEA['현수막'][inkType]['보급5장']['미터3'];
                    } else if (t >= 3.8 && t < 4.8) {
                        end_price = priceEA['현수막'][inkType]['보급5장']['미터4'];
                    } else {
                        end_price = priceEA['현수막'][inkType]['보급5장']['미터5'];
                    }
                } else {
                    end_price = t * priceEA['현수막'][inkType]['보급5장']['기본가'];
                }
                break;
            default:
                break;
        }

    } else { //10장이상이면

        switch (metHod) {
            case '저가':
                if (x < 5) { //5미터미만경우            
                    if (t > 0 && t < 1.8) {
                        end_price = priceEA['현수막'][inkType]['저가10장']['미터1'];
                    } else if (t >= 1.8 && t < 2.8) {
                        end_price = priceEA['현수막'][inkType]['저가10장']['미터2'];
                    } else if (t >= 2.8 && t < 3.8) {
                        end_price = priceEA['현수막'][inkType]['저가10장']['미터3'];
                    } else if (t >= 3.8 && t < 4.8) {
                        end_price = priceEA['현수막'][inkType]['저가10장']['미터4'];
                    } else {
                        end_price = priceEA['현수막'][inkType]['저가10장']['미터5'];
                    }
                } else {
                    end_price = t * priceEA['현수막'][inkType]['저가10장']['기본가'];
                }
                break;
            case '일반':
                if (x < 5) { //5미터미만경우            
                    if (t > 0 && t < 1.8) {
                        end_price = priceEA['현수막'][inkType]['보급10장']['미터1'];
                    } else if (t >= 1.8 && t < 2.8) {
                        end_price = priceEA['현수막'][inkType]['보급10장']['미터2'];
                    } else if (t >= 2.8 && t < 3.8) {
                        end_price = priceEA['현수막'][inkType]['보급10장']['미터3'];
                    } else if (t >= 3.8 && t < 4.8) {
                        end_price = priceEA['현수막'][inkType]['보급10장']['미터4'];
                    } else {
                        end_price = priceEA['현수막'][inkType]['보급10장']['미터5'];
                    }
                } else {
                    end_price = t * priceEA['현수막'][inkType]['보급10장']['기본가'];
                }
                break;
            default:
                break;
        }

    }
    console.log("동일데이터계산법 : " + end_price)
    return end_price;
}

//잉크종류, 원단종류, 가로, 세로, 장수, 계산방법, 마감, 출력원단폭
//현수막에서는 90폭원단 아래선택시 폭90으로 선택되도록 할것
//계산방법 [헤베, 동일데이터, 합폭,]


// Price('수성', '현수막', 200, 290, 1, '합폭', '', '폭110');
// Price('수성', '현수막', 130, 550, 1, '', '', '폭130');
// Price('수성', '현수막', 90, 500, 10, '동일데이터', '저가', '폭90' );
// Price('수성', '현수막', 90, 500, 10, '동일데이터', '저가', '폭90');
// Price('수성', '현수막', 70, 700, 1, '', '', '폭70');
// Price('약솔벤', '일반시트', 106.6, 190, 1, '헤베', '무광코팅', '');
// Price('약솔벤', '일반시트', 125.5, 206, 1, '헤베', '무광코팅', '');
// Price('약솔벤', '일반시트', 100.6, 332.6, 1, '헤베', '무광코팅', '');
// Price('약솔벤', '일반시트', 59.4, 84.1, 1, '헤베', '무광코팅', '');
// Price('약솔벤', '일반시트', 84, 235, 1, '헤베', '무광코팅', '');
// Price('약솔벤', '철판시트', 110, 161.6, 1, '헤베', '무광코팅', '');
// Price('강솔벤', '조명후렉스', 122, 500, 1, '헤베', '제작일반', '');
// Price('강솔벤', '조명후렉스', 110, 600, 1, '헤베', '출력일반', '');
// Price('강솔벤', '조명후렉스', 100, 300, 1, '헤베', '출력일반', '');
// Price('강솔벤', '조명후렉스', 89, 245, 2, '헤베', '출력일반', '');
// Price('강솔벤', '조명후렉스', 144, 330, 1, '헤베', '출력일반', '');
// Price('강솔벤', '그레이후렉스', 90, 180, 1, '헤베', '출력일반', '');
// Price('라텍스', '조명후렉스', 80, 240, 1, '헤베', '출력일반', '');
// Price('라텍스', '조명후렉스', 150, 680, 1, '헤베', '출력풀칼라', '');
// Price('라텍스', '일반시트', 100, 281, 1, '헤베', '무광코팅', '');
// Price('라텍스', '일반시트', 122.5, 215, 1, '헤베', '무광코팅', '');
// Price('수성', '현수막', 90, 150, 6, '동일데이터', '저가', '폭90');



function Aaa( imageWidth, imageLength, imageEa, paperType, coatMethod, frameMethod ) {
        // 가로, 세로, 장수, 원단종류, 코팅유무, 후렘제작방법
    
    this.imageWidth = imageWidth; 
    this.imageLength = imageLength;
    this.imageEa = imageEa;
    this.paperType = paperType;
    this.coatMethod = coatMethod;
    this.frameMethod = frameMethod;

    
    //계산방법
    let cC = document.getElementsByName('radio_method');       
    let calCulate;
    for( let i=0; i<cC.length; i++){
        if(cC[i].checked){
            calCulate = cC[i].value;        
        }
    }
    
    let metHod, printWidth;
    
    if( tyPe ==='현수막'){
        //코팅마감
        let mH = document.getElementsByName('clothsection');
        for( let i =0; i < mH.length; i++){
            if( mH[i].checked){
                console.log(mH[i]);
                metHod = mH[i].value;
            }
        };       
        
        //원단폭
        let pw = document.getElementById('printWidthType');
        let pwIndex = document.getElementById('printWidthType').options.selectedIndex;
        printWidth = pw.options[pwIndex].value;

    } else if( tyPe ==='후렉스'){

        //후렘결정(출력만/후렘제작)        
        let mH = document.getElementsByName('huremsection');
        for( let i =0; i < mH.length; i++){
            if( mH[i].checked){
                console.log(mH[i]);
                metHod = mH[i].value;
            }
        };       
        
        //원단폭        
        printWidth = null;

    } else{

        //코팅마감
        let mH = document.getElementsByName('cottiongsection');
        for( let i =0; i < mH.length; i++){
            if( mH[i].checked){
                console.log(mH[i]);
                metHod = mH[i].value;
            }
        };      
        
        //원단폭        
        printWidth = null;

    }

    

    // let last_price = Price(inkType, paperType, imageWidth, imageLength, coUnt, calCulate, metHod, printWidth);

    let last_p1 = Price('수성', paperType, imageWidth, imageLength, coUnt, calCulate, metHod, printWidth);
    let last_p2 = Price('약솔벤', paperType, imageWidth, imageLength, coUnt, calCulate, metHod, printWidth);
    let last_p3 = Price('강솔벤', paperType, imageWidth, imageLength, coUnt, calCulate, metHod, printWidth);
    let last_p4 = Price('라텍스', paperType, imageWidth, imageLength, coUnt, calCulate, metHod, printWidth);
    let last_p5 = Price('유브이', paperType, imageWidth, imageLength, coUnt, calCulate, metHod, printWidth);

    // document.getElementById('hebe').innerText = last_price[0];
    // document.getElementById('eaprice').innerText = last_price[1];
    // document.getElementById('lastprice').innerText = last_price[2];

    document.getElementById("hebe").innerText="헤베 : " + last_p1[0]

    const price_water = document.getElementById("price_water");
    const price_minisol = document.getElementById("price_minisol");
    const price_strongsol = document.getElementById("price_strongsol");
    const price_latax = document.getElementById("price_latax");
    const price_uv = document.getElementById("price_uv");

    if (typeof last_p1[1] == 'undefined' || last_p1[1] == null || last_p1[1] == "") {       
        price_water.innerText = '수성: 단가정보 없음';
        price_water.style.color="black";
    } else {
        price_water.innerText = '수성: 단가 : ' + numberWithCommas(last_p1[1]) +
                                    ' 총합계 : ' + numberWithCommas(last_p1[2]);
        price_water.style.color="blue";
    }
    if (typeof last_p2[1] == 'undefined' || last_p2[1] == null || last_p2[1] == "") {        
        price_minisol.innerText = '약솔벤: 단가정보 없음';
        price_minisol.style.color="black";
    } else {
        price_minisol.innerText = '약솔벤: 단가 : ' + numberWithCommas(last_p2[1]) + 
                                    ' 총합계 : ' + numberWithCommas(last_p2[2]);
        price_minisol.style.color="blue";
    }
    if (typeof last_p3[1] == 'undefined' || last_p3[1] == null || last_p3[1] == "") {
        price_strongsol.innerText = '강솔벤: 단가정보 없음';
        price_strongsol.style.color="black";
    } else {
        price_strongsol.innerText = '강솔벤: 단가 : ' + numberWithCommas(last_p3[1]) +
                                     ' 총합계 : ' + numberWithCommas(last_p3[2]);
        price_strongsol.style.color="blue";
    }
    if (typeof last_p4[1] == 'undefined' || last_p4[1] == null || last_p4[1] == "") {
        price_latax.innerText = '라텍스: 단가정보 없음';
        price_latax.style.color="black";
    } else {
        price_latax.innerText = '라텍스: 단가 : ' + numberWithCommas(last_p4[1]) + 
                                    ' 총합계 : ' + numberWithCommas(last_p4[2]);
        price_latax.style.color="blue";
    }
    if (typeof last_p5[1] == 'undefined' || last_p5[1] == null || last_p5[1] == "") {
        price_uv.innerText = '유브이: 단가정보 없음';
        price_uv.style.color="black";
    } else {
        price_uv.innerText = '유브이: 단가 : ' + numberWithCommas(last_p5[1]) + 
                                ' 총합계 : ' + numberWithCommas(last_p5[2]);
        price_uv.style.color="blue";
    }

    // console.log(" paperType: " + paperType + " imageWidth:" + imageWidth + " imageLength:" +
    //      imageLength + " coUnt:" + coUnt + " calCulate:" + calCulate + " metHod:" + metHod + " printWidth:" + printWidth);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //출처: https://fruitdev.tistory.com/160 [과일가게 개발자]

