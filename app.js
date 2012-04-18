    Ext.setup({
	 tabletStartupScreen: 'apple-touch-icon-precomposed.png',
	 phoneStartupScreen: 'apple-touch-icon-precomposed.png',
	 icon: 'iPhone-4-icon2.png',
	 glossOnIcon: true,
	onReady: function() {




var myToolbar = new Ext.Toolbar({
    docked: 'top',
    ui: 'light',
    title: 'Kinderan&auml;sthesie',
    items: []
});

var weightAgePickerHeader = new Ext.Panel({
    docked: 'top',
   style: 'text-align:center;',
   layout:{
    type:'hbox',
    align: 'stretch'
    },
   defaults:{flex:'1'},
   items: [
    {
     xtype: 'panel', html: '<span class="bold">[ kg ]</span>',
    },
    {
     xtype: 'panel',html: '<span class="bold">[ g ]</span>',
    },
    {
     xtype: 'panel',html: '<span class="bold">[ Jahre ]</span>',
    },
    {
     xtype: 'panel', html: '<span class="bold">[ Monate ]</span>',
    }
   ]
  });
var weightAgePicker = new Ext.Picker({
	fullscreen: true,
	floating: false,
	cancelButton: false,
    slots: [
        {
            name : 'weight_kg',
            title: 'kg',
            data : [
                {text: '0 kg', value: 0},
                {text: '1 kg', value: 1},
                {text: '2 kg', value: 2},
                {text: '3 kg', value: 3},
                {text: '4 kg', value: 4},
                {text: '5 kg', value: 5},
                {text: '6 kg', value: 6},
                {text: '7 kg', value: 7},
                {text: '8 kg', value: 8},
                {text: '9 kg', value: 9},
                {text: '10 kg', value: 10},
                {text: '11 kg', value: 11},
                {text: '12 kg', value: 12},
                {text: '13 kg', value: 13},
                {text: '14 kg', value: 14},
                {text: '15 kg', value: 15},
                {text: '16 kg', value: 16},
                {text: '17 kg', value: 17},
                {text: '18 kg', value: 18},
                {text: '19 kg', value: 19},
                {text: '20 kg', value: 20},
                {text: '21 kg', value: 21},
                {text: '22 kg', value: 22},
                {text: '23 kg', value: 23},
                {text: '24 kg', value: 24},
                {text: '25 kg', value: 25},
                {text: '26 kg', value: 26},
                {text: '27 kg', value: 27},
                {text: '28 kg', value: 28},
                {text: '29 kg', value: 29},
                {text: '30 kg', value: 30},
                {text: '31 kg', value: 31},
                {text: '32 kg', value: 32},
                {text: '33 kg', value: 33},
                {text: '34 kg', value: 34},
                {text: '35 kg', value: 35},
                {text: '36 kg', value: 36},
                {text: '37 kg', value: 37},
                {text: '38 kg', value: 38},
                {text: '39 kg', value: 39},
                {text: '40 kg', value: 40}
            ]
        } ,
		{
            name : 'weight_g',
            title: 'g',
            data : [
				{text: '0 g', value: 0},
				{text: '100 g', value: 1},
				{text: '200 g', value: 2},
				{text: '300 g', value: 3},
				{text: '400 g', value: 4},
				{text: '500 g', value: 5},
				{text: '600 g', value: 6},
				{text: '700 g', value: 7},
				{text: '800 g', value: 8},
				{text: '900 g', value: 9}
            ]			
		},
		{
            name : 'age_years',
            title: 'Jahre',
            data : [
                {text: '0 Jahre', value: 0},
                {text: '1 Jahr', value: 1},
                {text: '2 Jahre', value: 2},
                {text: '3 Jahre', value: 3},
                {text: '4 Jahre', value: 4},
                {text: '5 Jahre', value: 5},
                {text: '6 Jahre', value: 6},
                {text: '7 Jahre', value: 7},
                {text: '8 Jahre', value: 8},
                {text: '9 Jahre', value: 9},
                {text: '10 Jahre', value: 10},
                {text: '11 Jahre', value: 11},
                {text: '12 Jahre', value: 12},
                {text: '13 Jahre', value: 13},
                {text: '14 Jahre', value: 14},
                {text: '15 Jahre', value: 15},
                {text: '16 Jahre', value: 16},
                {text: '17 Jahre', value: 17}
            ]			
		},
		{
            name : 'age_months',
            title: 'Monate',
            data : [
                {text: '0 Monate', value: 0},
                {text: '1 Monat', value: 1},
                {text: '2 Monate', value: 2},
                {text: '3 Monate', value: 3},
                {text: '4 Monate', value: 4},
                {text: '5 Monate', value: 5},
                {text: '6 Monate', value: 6},
                {text: '7 Monate', value: 7},
                {text: '8 Monate', value: 8},
                {text: '9 Monate', value: 9},
                {text: '10 Monate', value: 10},
                {text: '11 Monate', value: 11}
            ]			
		}
    ],
	doneButton: {
		text: 'Absenden',
		handler: function () {
			var weight_kg = weightAgePicker.getValue()['weight_kg'];
			var weight_g = weightAgePicker.getValue()['weight_g'];
			var age_years = weightAgePicker.getValue()['age_years'];
			var age_months = weightAgePicker.getValue()['age_months'];
/* 			alert(Ext.encode(weight_kg)); */
			weightAgePicker.hide();
		}
	},
    listeners: { 
        pick: function(weightAgePicker) { 
            var weight_kg = weightAgePicker.getValue()['weight_kg'];
			var weight_g = weightAgePicker.getValue()['weight_g'];
			var age_years = weightAgePicker.getValue()['age_years'];
			var age_months = weightAgePicker.getValue()['age_months'];
        } 
     } 
});

weightAgePicker.show();


weightAgePicker.on('hide', function(){
	var weight_kg = weightAgePicker.getValue()['weight_kg'];
	var weight_g = weightAgePicker.getValue()['weight_g'];
	var age_years = weightAgePicker.getValue()['age_years'];
	var age_months = weightAgePicker.getValue()['age_months'];
weightAgePicker.destroy();    
    
// Mathematik
var kg = weight_kg + '.' +  weight_g;
var m = age_years * 12 + age_months ;

// 1. Normwerte
// herzfrequenz
var normHeartRate = '';
if (m <= 3) 
	{normHeartRate = '100 - 150';}
else if (3 < m && m <= 6) 
	{normHeartRate = '90 - 120';}
else if (6 < m && m <= 12) 
	{normHeartRate = '80 - 120';}
else if (12 < m && m <= 36) 
	{normHeartRate = '70 - 110';}
else if (36 < m && m <= 72) 
	{normHeartRate = '65 - 110';}
else if (72 < m && m <= 144) 
	{normHeartRate = '60 - 95';}
else if (144 < m ) 
	{normHeartRate = '55 - 85';}
;
// blood pressure
var normBloodPressure = '';
if (m <= 3) 
	{normBloodPressure = '65-85 / 45-55';}
else if (3 < m && m <= 6) 
	{normBloodPressure = '70-90 / 50-65';}
else if (6 < m && m <= 12) 
	{normBloodPressure = '80-100 / 55-65';}
else if (12 < m && m <= 36) 
	{normBloodPressure = '90-105 / 55-70';}
else if (36 < m && m <= 72) 
	{normBloodPressure = '95-110 / 60-75';}
else if (72 < m && m <= 144) 
	{normBloodPressure = '100-120 / 60-75';}
else if (144 < m && m <= 216) 
	{normBloodPressure = '110-135 / 65-85';}
;
// respiratory rate
var normRespiratoryRate = '';
var normMedianRespiratoryRate = '';
if (m <= 1) 
	{normRespiratoryRate = '50'; normMedianRespiratoryRate = 50;}
else if (1 < m && m <= 6) 
	{normRespiratoryRate = '25-35'; normMedianRespiratoryRate = 30;}
else if (6 < m && m <= 12) 
	{normRespiratoryRate = '18-30'; normMedianRespiratoryRate = 24;}
else if (12 < m && m <= 36) 
	{normRespiratoryRate = '18-30'; normMedianRespiratoryRate = 24;}
else if (36 < m && m <= 72) 
	{normRespiratoryRate = '18-28'; normMedianRespiratoryRate = 23;}
else if (72 < m && m <= 108) 
	{normRespiratoryRate = '16-26'; normMedianRespiratoryRate = 21;}
else if (108 < m && m <= 144) 
	{normRespiratoryRate = '13-23'; normMedianRespiratoryRate = 18;}
else if (144 < m && m <= 180) 
	{normRespiratoryRate = '10-20'; normMedianRespiratoryRate = 15;}
else if (180 < m && m <= 216) 
	{normRespiratoryRate = '9-15'; normMedianRespiratoryRate = 12;}
;
// tidal volume
var normTidalVolume = '';
normTidalVolume = (Math.round(kg * 6 * 1) / 1);

// minute volume
var normMinuteVolume = '';
var normMinuteVolumeLiter = '';
normMinuteVolume = Math.round(normTidalVolume * normMedianRespiratoryRate * 100) / 100;
normMinuteVolumeLiter = Math.round(normMinuteVolume / 10) / 100;

// brody number kg ^ 3/4, 2 kommastellen
brody = Math.pow( kg, 0.75 );
brody = Math.round(brody * 100) / 100;

//Free water requirement (mL/h) Brody's number x 5.5 - 6.7 age dependant
var freeWaterRequirement = '';
var freeWaterRequirementKG = '';
if (kg <= 20) 
	{freeWaterRequirement = (Math.round(brody * 6.7 * 1) / 1); freeWaterRequirementKG = (Math.round(brody * 6.7 * 10 / kg) / 10); }
else if (20 < kg && kg <= 30) 
	{freeWaterRequirement = (Math.round(brody * 6.0 * 1) / 1); freeWaterRequirementKG = (Math.round(brody * 6.0 * 10 / kg) / 10) ;}
else if (30 < kg && kg <= 50) 
	{freeWaterRequirement = (Math.round(brody * 5.5 * 1) / 1); freeWaterRequirementKG = (Math.round(brody * 5.5 * 10 / kg) / 10) ;}
;
//Oxygen consumption (mL/min) Brody's number x 10 - 14 age dependant  
var normOxygenConsumption = '';
var normOxygenConsumptionKG = '';
if (kg <= 20) 
	{normOxygenConsumption = (Math.round(brody * 14 * 1) / 1); normOxygenConsumptionKG = (Math.round(brody * 14 * 10 / kg) / 10) ;}
else if (20 < kg && kg <= 30) 
	{normOxygenConsumption = (Math.round(brody * 12 * 1) / 1); normOxygenConsumptionKG = (Math.round(brody * 12 * 10 / kg) / 10) ;}
else if (30 < kg && kg <= 50) 
	{normOxygenConsumption = (Math.round(brody * 11 * 1) / 1); normOxygenConsumptionKG = (Math.round(brody * 11 * 10 / kg) / 10) ;}
;
//Minute CO2 production (mL/min) basically VO2 * RQ (0.8) or Brody's number x 8 - 11.2  
var normCO2Production = '';
var normCO2ProductionKG = '';
if (kg <= 20) 
	{normCO2Production = (Math.round(brody * 11 * 1) / 1); normCO2ProductionKG = (Math.round(brody * 11 * 10 / kg) / 10) ;}
else if (20 < kg && kg <= 30) 
	{normCO2Production = (Math.round(brody * 9.6 * 1) / 1); normCO2ProductionKG = (Math.round(brody * 9.6 * 10 / kg) / 10) ;}
else if (30 < kg && kg <= 50) 
	{normCO2Production = (Math.round(brody * 8.8 * 1) / 1); normCO2ProductionKG = (Math.round(brody * 8.8 * 10 / kg) / 10) ;}
;
// Cardiac output (dL/min) Brody's number x 2 - 3 age dependant 
var normCardiacOutput = '';
var normCardiacOutputKG = '';
if (kg <= 20) 
	{normCardiacOutput = (Math.round(brody * 0.3 * 100) / 100); normCardiacOutputKG = (Math.round(brody * 0.3 * 10 * 100 / kg) / 100) ;}
else if (20 < kg && kg <= 30) 
	{normCardiacOutput = (Math.round(brody * 0.25 * 100) / 100); normCardiacOutputKG = (Math.round(brody * 0.25 * 10 * 100 / kg) / 100) ;}
else if (30 < kg && kg <= 50) 
	{normCardiacOutput = (Math.round(brody * 0.225 * 100) / 100); normCardiacOutputKG = (Math.round(brody * 0.225 * 10 * 100 / kg) / 100) ;}
;
//Blood volume
var bloodVolume = '';
if (m <= 12) 
	{bloodVolume = (Math.round(kg * 90 * 1) / 1);}
else if (12 < m && m <= 72) 
	{bloodVolume = (Math.round(kg * 80 * 1) / 1);}
else if (72 < m ) 
	{bloodVolume = (Math.round(kg * 75 * 1) / 1);}
;
// face mask sizes
var faceMaskSizeRB = '';
var faceMaskSizeKS = '';
var faceMaskSizeAdult = '';
if (m < 1) {
	faceMaskSizeRB = '1';
	faceMaskSizeKS = '1 (neonatal)';
} else if (1 <= m && m < 12) {
	faceMaskSizeRB = '1';
	faceMaskSizeKS = '2 (infant)';
} else if (12 <= m && m < 36) {
	faceMaskSizeRB = '2';
	faceMaskSizeKS = '3 (toddler)';
} else if (36 <= m && m < 72) {
	faceMaskSizeRB = '3';
	faceMaskSizeKS = '3 (toddler)';
} else if (72 <= m) {
	var faceMaskSizeAdult = '2-3';
}
// laryngeal mask sizes
var laryngealMaskSize = '';
var laryngealMaskCuffSize = '';
var laryngealMaskBiggestETT = '';
var laryngealMaskBronchoscopeSize = '';
if (kg < 5) {
	laryngealMaskSize = '1';
	laryngealMaskCuffSize = '2-4 ml';
	laryngealMaskBiggestETT = '3.0';
	laryngealMaskBronchoscopeSize = '2.2 mm';
} else if (5 <= kg && kg < 10) {
	laryngealMaskSize = '1.5';
	laryngealMaskCuffSize = '-8 ml';
	laryngealMaskBiggestETT = '3.5';
	laryngealMaskBronchoscopeSize = '2.2 mm';
} else if (10 <= kg && kg < 20) {
	laryngealMaskSize = '2';
	laryngealMaskCuffSize = '-10 ml';
	laryngealMaskBiggestETT = '4.0';
	laryngealMaskBronchoscopeSize = '2.2 mm';
} else if (20 <= kg && kg < 30) {
	laryngealMaskSize = '2.5';
	laryngealMaskCuffSize = '-15 ml';
	laryngealMaskBiggestETT = '5.0';
	laryngealMaskBronchoscopeSize = '4.0 mm';
} else if (30 <= kg) {
	laryngealMaskSize = '3';
	laryngealMaskCuffSize = '- 25 ml';
	laryngealMaskBiggestETT = '6.0';
	laryngealMaskBronchoscopeSize = '4.0 mm';
}

var laryngoscopeBlade = '';
if (m < 1) {
	laryngoscopeBlade = 'Miller 0';
} else if (1 <= m && m < 24) {
	laryngoscopeBlade = 'Miller 1';
} else if (24 <= m && m < 72) {
	laryngoscopeBlade = 'Macintosh 1 oder 2';
} else if (72 <= m && m < 120) {
	laryngoscopeBlade = 'Macintosh 2';
} else if (120 <= m) {
	laryngoscopeBlade = 'Macintosh 3';
}

var tubeSizeUncuffed = '';
var tubeSizeCuffed = '';
var tubeInsertionDepth = '';
if (m < 1) {
	tubeSizeUncuffed = '3.0 - 3.5</p><p class="description">Frühgeboren</p>' +
	'<p class ="values">2.5 - 3.0';
	tubeInsertionDepth = '7 - 9 cm';
} else if (1 <= m && m < 4) {
	tubeSizeUncuffed = '3.5';
	tubeSizeCuffed = '3.0';
	tubeInsertionDepth = '10 cm';
} else if (4 <= m && m < 12) {
	tubeSizeUncuffed = '4.0';
	tubeSizeCuffed = '3.0';
	tubeInsertionDepth = '11 - 12 cm';
} else if (12 <= m && m < 24) {
	tubeSizeUncuffed = '4.5 - 5.0';
	tubeSizeCuffed = '3.5';
	tubeInsertionDepth = '12 - 13 cm';
} else if (24 <= m && m < 48) {
	tubeSizeUncuffed = '5.0 - 5.5';
	tubeSizeCuffed = '4.0';
	tubeInsertionDepth = '13 - 14 cm';
} else if (48 <= m && m < 72) {
	tubeSizeUncuffed = '5.5 - 6.0';
	tubeSizeCuffed = '4.5';
	tubeInsertionDepth = '14 - 15 cm';
} else if (72 <= m && m < 96) {
	tubeSizeUncuffed = '6.0 - 6.5';
	tubeSizeCuffed = '5.0';
	tubeInsertionDepth = '15 - 16 cm';
} else if (96 <= m && m < 120) {
	tubeSizeCuffed = '5.5';
	tubeInsertionDepth = '16 - 17 cm';
} else if (120 <= m) {
	tubeSizeCuffed = '6.0';
	tubeInsertionDepth = '18 - 19 cm';
}

// Ende normwerte

// begin anesthesia / sedation
var thiopentalDosageMG = '';
var thiopentalDosageML = '';
var thiopentalDosageMGString = '';
if (kg <= 5) 
	{thiopentalDosageMG = (Math.round(kg * 4 * 10) / 10); thiopentalDosageML = (Math.round(kg * 4 / 25 * 100) / 100); thiopentalDosageMGString = '4 mg/kg KG';}
else if (5 < kg && kg <= 10) 
	{thiopentalDosageMG = (Math.round(kg * 6 * 1) / 1) + ' - ' + (Math.round(kg * 8 * 1) / 1); thiopentalDosageML = (Math.round(kg * 6 / 25 * 10) / 10) + ' - ' + (Math.round(kg * 8 / 25 * 10) / 10); thiopentalDosageMGString = '6-8 mg/kg KG'; }
else if (10 < kg) 
	{thiopentalDosageMG = (Math.round(kg * 5 * 1) / 1); thiopentalDosageML = (Math.round(kg * 5  / 25 * 10) / 10); thiopentalDosageMGString = '5 mg/kg KG';}
;

var propofolTooYoungWarning = false;
var propofolInductionPercentConcentration = '';
var propofolInductionConcentration = '';
var propofolInductionVialContent = '';
var propofolSedationGeneralAnesthesiaPercentConcentration = '';
var propofolSedationGeneralAnesthesiaConcentration = '';
var propofolSedationGeneralAnesthesiaVialContent = '';
var propofolInductionDosageMG = '';
var propofolInductionDosageML = '';
var propofolSedationDosageMG = '';
var propofolSedationDosageML = '';
var propofolGeneralAnesthesiaDosageMG = '';
var propofolGeneralAnesthesiaDosageML = '';
var propofolPovDosageMG = '';
var propofolPovDosageML = '';
var propofolTwoPercentWarning = '';
var secondPropofolConcentration = false;
if (m < 1) 
	{
		propofolTooYoungWarning = true;
	}
else if (1 <= m && m <= 36) 
	{
		var propofolInductionPercentConcentration = ' 0,5%';
		var propofolInductionConcentration = '5mg/ml';
		var propofolInductionVialContent = '100 mg / 20ml';
		var propofolInductionDosageMG = (Math.round(kg * 2 * 10) / 10) + ' - ' + (Math.round(kg * 5 * 10) / 10);
		var propofolInductionDosageML = (Math.round(kg * 0.4 * 10) / 10) + ' - ' + (Math.round(kg * 1 * 10) / 10);
		var propofolPovDosageMG = (Math.round(kg * 0.5 * 10) / 10) + ' - ' + (Math.round(kg * 1 * 10) / 10);
		var propofolPovDosageML = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.2 * 10) / 10);
		
		var secondPropofolConcentration = true;
		
		var propofolSedationGeneralAnesthesiaPercentConcentration = ' 1%';
		var propofolSedationGeneralAnesthesiaConcentration = '10 mg/ml';
		var propofolSedationGeneralAnesthesiaVialContent = '200 mg / 20 ml';
		var propofolSedationDosageMG = (Math.round(kg * 2 * 10) / 10);
		var propofolSedationDosageML = (Math.round(kg * 0.2 * 10) / 10);
		var propofolGeneralAnesthesiaDosageMG = (Math.round(kg * 8 * 10) / 10) + ' - ' + (Math.round(kg * 10 * 10) / 10);
		var propofolGeneralAnesthesiaDosageML = (Math.round(kg * 0.8 * 10) / 10) + ' - ' + (Math.round(kg * 1 * 10) / 10);

	}
else if (36 < m && m <= 120) 
	{
		var propofolInductionPercentConcentration = ' 1%';
		var propofolInductionConcentration = '10mg/ml';
		var propofolInductionVialContent = '200mg / 20ml';
		var propofolInductionDosageMG = (Math.round(kg * 2 * 1) / 1) + ' - ' + (Math.round(kg * 5 * 1) / 1);
		var propofolInductionDosageML = (Math.round(kg * 0.2 * 1) / 1) + ' - ' + (Math.round(kg * 0.5 * 1) / 1);
		var propofolPovDosageMG = (Math.round(kg * 0.5 * 10) / 10) + ' - ' + (Math.round(kg * 1 * 10) / 10);
		var propofolPovDosageML = (Math.round(kg * 0.05 * 10) / 10) + ' - ' + (Math.round(kg * 0.1 * 10) / 10);
		
		var secondPropofolConcentration = false;
		
		var propofolSedationGeneralAnesthesiaPercentConcentration = ' 1%';
		var propofolSedationGeneralAnesthesiaConcentration = '10 mg/ml';
		var propofolSedationGeneralAnesthesiaVialContent = '500 mg / 50 ml';
		var propofolSedationDosageMG = (Math.round(kg * 2 * 1) / 1);
		var propofolSedationDosageML = (Math.round(kg * 0.2 * 10) / 10);
		var propofolGeneralAnesthesiaDosageMG = (Math.round(kg * 8 * 1) / 1) + ' - ' + (Math.round(kg * 10 * 1) / 1);
		var propofolGeneralAnesthesiaDosageML = (Math.round(kg * 0.8 * 1) / 1) + ' - ' + (Math.round(kg * 1 * 1) / 1);

	}
else if (120 < m) 
	{
		var propofolInductionPercentConcentration = ' 1%';
		var propofolInductionConcentration = '10mg/ml';
		var propofolInductionVialContent = '200mg / 20ml';
		var propofolInductionDosageMG = (Math.round(kg * 2 * 1) / 1) + ' - ' + (Math.round(kg * 5 * 1) / 1);
		var propofolInductionDosageML = (Math.round(kg * 0.2 * 1) / 1) + ' - ' + (Math.round(kg * 0.5 * 1) / 1);
		var propofolPovDosageMG = (Math.round(kg * 0.5 * 10) / 10) + ' - ' + (Math.round(kg * 1 * 10) / 10);
		var propofolPovDosageML = (Math.round(kg * 0.05 * 10) / 10) + ' - ' + (Math.round(kg * 0.1 * 10) / 10);

		var secondPropofolConcentration = true;

		var propofolSedationGeneralAnesthesiaPercentConcentration = ' 2%';
		var propofolSedationGeneralAnesthesiaConcentration = '20 mg/ml';
		var propofolSedationGeneralAnesthesiaVialContent = '1000 mg / 50 ml';
		var propofolSedationDosageMG = (Math.round(kg * 2 * 1) / 1);
		var propofolSedationDosageML = (Math.round(kg * 0.1 * 10) / 10);
		var propofolGeneralAnesthesiaDosageMG = (Math.round(kg * 8 * 1) / 1) + ' - ' + (Math.round(kg * 10 * 1) / 1);
		var propofolGeneralAnesthesiaDosageML = (Math.round(kg * 0.4 * 1) / 1) + ' - ' + (Math.round(kg * 0.5 * 1) / 1);

	}
;  

var midazolamDosageMG = '';
var midazolamDosageML = '';
var midazolamDosageMGString = '';
midazolamDosageMG = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.15 * 10) / 10);
midazolamDosageML = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.15 * 10) / 10);
midazolamDosageMGString = '0.1 - 0.15 mg/kg KG';

var ketaminDosageIVMG = '';
var ketaminDosageIVML = '';
var ketaminDosageIVMGString = '';
var ketaminDosageRectalMG = '';
var ketaminDosageRectalML = '';
var ketaminDosageRectalMGString = '';
ketaminDosageIVMG = (Math.round(kg * 1 * 10) / 10) + ' - ' + (Math.round(kg * 2 * 10) / 10);
ketaminDosageIVML = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.2 * 10) / 10);
ketaminDosageIVMGString = '1 - 2 mg/kg KG<br /> vorher Atropin';
ketaminDosageRectalMG = (Math.round(kg * 10 * 1) / 1);
ketaminDosageRectalML = (Math.round(kg * 1 * 1) / 1);
ketaminDosageRectalMGString = '10 mg/kg KG<br />+ 1 mg/kg KG Midazolam';

var esketaminDosageIVMG = '';
var esketaminDosageIVML = '';
var esketaminDosageIVMGString = '';
var esketaminDosageRectalMG = '';
var esketaminDosageRectalML = '';
var esketaminDosageRectalMGString = '';
esketaminDosageIVMG = (Math.round(kg * 0.5 * 10) / 10) + ' - ' + (Math.round(kg * 1 * 10) / 10);
esketaminDosageIVML = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.2 * 10) / 10);
esketaminDosageIVMGString = '0.5 - 1 mg/kg KG<br /> vorher Atropin';
esketaminDosageRectalMG = (Math.round(kg * 5 * 1) / 1) + ' - ' + (Math.round(kg * 7.5 * 1) / 1);
esketaminDosageRectalML = (Math.round(kg * 1 * 1) / 1) + ' - ' + (Math.round(kg * 1.5 * 1) / 1);
esketaminDosageRectalMGString = '5 - 7.5 mg/kg KG<br />+ 1 mg/kg KG Midazolam';
// end anesthesia / sedation
// begin analgesics
var alfentanilDosageMG = '';
var alfentanilDosageML = '';
var alfentanilDosageMGString = '';
alfentanilDosageMG = (Math.round(kg * 0.03 * 100) / 100) + ' - ' + (Math.round(kg * 0.05 * 100) / 100);
alfentanilDosageML = (Math.round(kg * 0.3 * 10) / 10) + ' - ' + (Math.round(kg * 0.5 * 10) / 10);
alfentanilDosageMGString = '0.03 - 0.05 mg/kg KG';

var sufentanilDosageMG = '';
var sufentanilDosageML = '';
var sufentanilDosageMGString = '';
var sufentanilSolution = '';
var sufentanilConcentration = '';
if (kg < 20) 
	{sufentanilDosageMG = (Math.round(kg * 0.3 * 10) / 10) + ' - ' + (Math.round(kg * 0.5 * 10) / 10);
	sufentanilDosageML = (Math.round(kg * 0.3 * 10) / 10) + ' - ' + (Math.round(kg * 0.5 * 10) / 10);
	sufentanilDosageMGString = '0.3 - 0.5 <span style="font-family:opensans;">&micro;</span>g/kg KG';
	sufentanilSolution = 'auf 10 ml Sterofundin';
	sufentanilConcentration = '1 <span style="font-family:opensans;">&micro;</span>g/ml';}
else if (20 <= kg) 
	{sufentanilDosageMG = (Math.round(kg * 0.3 * 10) / 10) + ' - ' + (Math.round(kg * 0.5 * 10) / 10);
	sufentanilDosageML = (Math.round(kg * 0.3 / 5 * 10) / 10) + ' - ' + (Math.round(kg * 0.5 / 5 * 10) / 10);
	sufentanilDosageMGString = '0.3 - 0.5 <span style="font-family:opensans;">&micro;</span>g/kg KG';
	sufentanilSolution = 'pur';
	sufentanilConcentration = '5 <span style="font-family:opensans;">&micro;</span>g/ml';}
;
var piritramidDosageMG = '';
var piritramidDosageML = '';
var piritramidDosageMGString = '';
piritramidDosageMG = (Math.round(kg * 0.05 * 10) / 10) + ' - ' + (Math.round(kg * 0.1 * 10) / 10);
piritramidDosageML = (Math.round(kg * 0.05 * 10) / 10) + ' - ' + (Math.round(kg * 0.1 * 10) / 10);
piritramidDosageMGString = '0.05 - 0.1 mg/kg KG';

var nalbuphinDosageMG = '';
var nalbuphinDosageML = '';
var nalbuphinDosageMGString = '';
var nalbuphinTooYoungWarning = false;
if (m < 18) 
	{nalbuphinTooYoungWarning = true; }
else if (18 <= m ) 
	{
	nalbuphinDosageMG = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.2 * 10) / 10);
	nalbuphinDosageML = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.2 * 10) / 10);
	nalbuphinDosageMGString = '0.1 - 0.2 mg/kg KG';
	}
;

var remifentanilInductionDosageMG = '';
var remifentanilInductionDosageML = '';
var remifentanilInductionDosageMGString = '';
var remifentanilGeneralAnesthesiaDosageMG = '';
var remifentanilGeneralAnesthesiaDosageML = '';
var remifentanilGeneralAnesthesiaDosageMGString = '';
var remifentanilSolutionBelow30 = '';
var remifentanilConcentration = '';
if (kg < 30) 
	{
	remifentanilSolutionBelow30 = '<p class ="values">davon 15 ml + 35 ml SF</p>';
	remifentanilConcentration = '6 <span style="font-family:opensans;">&micro;</span>g/ml';
	remifentanilInductionDosageMG = (Math.round(kg * 3 * 10) / 10);
	remifentanilInductionDosageML = (Math.round(kg * 3 / 6 * 10) / 10);
	remifentanilInductionDosageMGString = '3 <span style="font-family:opensans;">&micro;</span>g/kg KG';
	remifentanilGeneralAnesthesiaDosageMG = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.3 * 10) / 10);
	remifentanilGeneralAnesthesiaDosageML = (Math.round(kg * 0.1 * 10 * 10) / 10) + ' - ' + (Math.round(kg * 0.3 * 10 * 10) / 10);
	remifentanilGeneralAnesthesiaDosageMGString = '0.1 - 0.3 <span style="font-family:opensans;">&micro;</span>g/kg KG/min';
	}
else if (30 <= kg) 
	{
	remifentanilConcentration = '20 <span style="font-family:opensans;">&micro;</span>g/ml';
	remifentanilInductionDosageMG = (Math.round(kg * 3 * 10) / 10);
	remifentanilInductionDosageML = (Math.round(kg * 3 / 20 * 10) / 10);
	remifentanilInductionDosageMGString = '3 <span style="font-family:opensans;">&micro;</span>g/kg KG';
	remifentanilGeneralAnesthesiaDosageMG = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.3 * 10) / 10);
	remifentanilGeneralAnesthesiaDosageML = (Math.round(kg * 0.1 * 3 * 10) / 10) + ' - ' + (Math.round(kg * 0.3 * 3 * 10) / 10);
	remifentanilGeneralAnesthesiaDosageMGString = '0.1 - 0.3 <span style="font-family:opensans;">&micro;</span>g/kg KG/min';
	}
;
var fentanylDosageMG = '';
var fentanylDosageML = '';
var fentanylDosageMGString = '';
var fentanylSolution = '';
var fentanylConcentration = '';
var fentanylVialContent = '';
if (kg < 20) 
	{
	fentanylVialContent = '0.1 mg / 2 ml';
	fentanylDosageMG = (Math.round(kg * 3 * 1) / 1) + ' - ' + (Math.round(kg * 5 * 1) / 1); /* 0 ks */
	fentanylDosageML = (Math.round(kg * 0.3 * 10) / 10) + ' - ' + (Math.round(kg * 0.5 * 10) / 10); /* 1 ks */
	fentanylDosageMGString = '3 - 5 <span style="font-family:opensans;">&micro;</span>g/kg KG';
	fentanylSolution = 'auf 10 ml Sterofundin';
	fentanylConcentration = '10 <span style="font-family:opensans;">&micro;</span>g/ml';}
else if (20 <= kg) 
	{
	fentanylVialContent = '0.5 mg / 10 ml';
	fentanylDosageMG = (Math.round(kg * 3 * 1) / 1) + ' - ' + (Math.round(kg * 5 * 1) / 1);
	fentanylDosageML = (Math.round(kg * 0.3 / 5 * 10) / 10) + ' - ' + (Math.round(kg * 0.5 / 5 * 10) / 10);
	fentanylDosageMGString = '3 - 5 <span style="font-family:opensans;">&micro;</span>g/kg KG';
	fentanylSolution = 'pur';
	fentanylConcentration = '50 <span style="font-family:opensans;">&micro;</span>g/ml';}
;
var clonidinDosageMG = '';
var clonidinDosageML = '';
var clonidinDosageMGString = '';
var clonidinTooYoungWarning = false;
if (m < 12) 
	{clonidinTooYoungWarning = true; }
else if (12 <= m ) 
	{
	clonidinDosageMG = (Math.round(kg * 2 * 10) / 10);
	clonidinDosageML = (Math.round(kg * 2 / 15 * 10) / 10);
	clonidinDosageMGString = '2 <span style="font-family:opensans;">&micro;</span>g/kg KG';
	}
;
var metamizolDosageIVMG = '';
var metamizolDosageIVML = '';
var metamizolDosageIVMGString = '';
var metamizolDosageIVMaximal = '';
var metamizolDOsageIVMaximalString = '';
var metamizolDosageOralMG = '';
var metamizolDosageOralGTT = '';
var metamizolDosageOralML = '';
var metamizolDosageOralMaximal = '';
var metamizolTooYoungWarning = false;
if (m < 3 || kg < 5) 
	{metamizolTooYoungWarning = true; }
else if (3 <= m && 5 <= kg) 
	{
	metamizolDosageIVMG = (Math.round(kg * 10 * 10) / 10) + ' - ' + (Math.round(kg * 20 * 10) / 10);
	metamizolDosageIVML = (Math.round(kg * 10 / 100 * 10) / 10) + ' - ' + (Math.round(kg * 20 / 100 * 10) / 10);
	metamizolDosageIVMGString = '10 - 20 mg/kg KG';
	metamizolDosageIVMaximal = (Math.round(kg * 80 * 10) / 10);	
	metamizolDosageIVMaximalString = '80 mg/kg KG';
		if (5 <= kg && kg < 9)
			{
			metamizolDosageOralMG = '50-100';
			metamizolDosageOralGTT = '2-4';
			metamizolDosageOralML = '0.1-0.2';
			metamizolDosageOralMaximal = '300';
			}
		else if (9 <= kg && kg < 16)
			{ 
			metamizolDosageOralMG = '75-250';
			metamizolDosageOralGTT = '3-10';
			metamizolDosageOralML = '0.15-0.5';
			metamizolDosageOralMaximal = '750';
			}
		else if (16 <= kg && kg < 24)
			{ 
			metamizolDosageOralMG = '125-375';
			metamizolDosageOralGTT = '5-15';
			metamizolDosageOralML = '0.25-0.75';
			metamizolDosageOralMaximal = '1125';
			}
		else if (24 <= kg && kg < 31)
			{ 
			metamizolDosageOralMG = '200-500';
			metamizolDosageOralGTT = '8-20';
			metamizolDosageOralML = '0.4-1';
			metamizolDosageOralMaximal = '1500';
			}
		else if (31 <= kg && kg < 41)
			{ 
			metamizolDosageOralMG = '250-750';
			metamizolDosageOralGTT = '10-30';
			metamizolDosageOralML = '0.5-1.5';
			metamizolDosageOralMaximal = '2250';
			}	
	//end else if 3 < m
	}
;
var ibuprofenDosageMG = '';
var ibuprofen2PerCentDosageML = '';
var ibuprofen4PerCentDosageML = '';
var ibuprofenDosageMGString = '';
var ibuprofenDosageMaximal = '';
var ibuprofenDosageMaximalString = '';
var ibuprofenTooYoungWarning = false;
if (m < 6 || kg < 5) 
	{ibuprofenTooYoungWarning = true; }
else if (6 <= m && 5 <= kg) 
	{
	ibuprofenDosageMG = (Math.round(kg * 10 * 10) / 10);
	ibuprofen2PerCentDosageML = (Math.round(kg * 10 / 20 * 10) / 10);
	ibuprofen4PerCentDosageML = (Math.round(kg * 10 / 40 * 10) / 10);
	ibuprofenDosageMGString = '10 mg/kg KG';
	ibuprofenDosageMaximal = (Math.round(kg * 30 * 10) / 10);
	ibuprofenDosageMaximalString = '30 mg/kg KG';
	}
;
var paracetamolDosageIVMG = '';
var paracetamolDosageIVML = '';
var paracetamolDosageIVMGString = '';
var paracetamolDosageIVMaximalString = '';
var paracetamolDosageIVMaximal = '';
var paracetamolTooYoungWarning = false;
if (kg < 3)
	{
	paracetamolTooYoungWarning = true;
	}
else if (3 <= kg && kg < 10)
	{ 
	paracetamolDosageIVMG = (Math.round(kg * 7.5 * 10) / 10);
	paracetamolDosageIVML = (Math.round(kg * 7.5 / 10 * 10) / 10);
	paracetamolDosageIVMGString = '7.5 mg/kg KG';
	paracetamolDosageIVMaximalString = '30 mg/kg KG';
	paracetamolDosageIVMaximal = (Math.round(kg * 30 * 10) / 10);
	}
else if (10 <= kg ) 
	{
	paracetamolDosageIVMG = (Math.round(kg * 15 * 10) / 10);
	paracetamolDosageIVML = (Math.round(kg * 15 / 10 * 10) / 10);
	paracetamolDosageIVMGString = '15 mg/kg KG';
	paracetamolDosageIVMaximalString = '60 mg/kg KG';
	paracetamolDosageIVMaximal = (Math.round(kg * 60 * 10) / 10);
	}
;
var paracetamolDosageRectalMG = '';
var paracetamolDosageRectalMaximal = '';
if (kg < 3)
	{
	paracetamolTooYoungWarning = true;
	}
else if (3 <= kg && kg < 4)
	{ 
	paracetamolDosageRectalMG = '75';
	paracetamolDosageRectalMaximal = '150';
	}
else if (4 <= kg && kg < 5)
	{ 
	paracetamolDosageRectalMG = '75';
	paracetamolDosageRectalMaximal = '225';
	}
else if (5 <= kg && kg < 7)
	{ 
	paracetamolDosageRectalMG = '75';
	paracetamolDosageRectalMaximal = '300';
	}
else if (7 <= kg && kg < 8)
	{ 
	paracetamolDosageRectalMG = '125';
	paracetamolDosageRectalMaximal = '375';
	}
else if (8 <= kg && kg < 13)
	{ 
	paracetamolDosageRectalMG = '125';
	paracetamolDosageRectalMaximal = '500';
	}
else if (13 <= kg && kg < 16)
	{ 
	paracetamolDosageRectalMG = '250';
	paracetamolDosageRectalMaximal = '750';
	}
else if (16 <= kg && kg < 26)
	{ 
	paracetamolDosageRectalMG = '250';
	paracetamolDosageRectalMaximal = '1000';
	}
else if (26 <= kg && kg < 33)
	{ 
	paracetamolDosageRectalMG = '500';
	paracetamolDosageRectalMaximal = '1500';
	}
else if (33 <= kg && kg < 41)
	{ 
	paracetamolDosageRectalMG = '500';
	paracetamolDosageRectalMaximal = '2000';
	}
;

var paracetamolDosageOralMG = '';
var paracetamolDosageOralML = '';
var paracetamolDosageOralMaximal = '';
if (kg < 3)
	{
	paracetamolTooYoungWarning = true;
	}
else if (3 <= kg && kg < 4)
	{ 
	paracetamolDosageOralMG = '40';
	paracetamolDosageOralML = '1';
	paracetamolDosageOralMaximal = '160';
	}
else if (4 <= kg && kg < 5)
	{ 
	paracetamolDosageOralMG = '60';
	paracetamolDosageOralML = '1.5';
	paracetamolDosageOralMaximal = '240';
	}
else if (5 <= kg && kg < 6)
	{ 
	paracetamolDosageOralMG = '60';
	paracetamolDosageOralML = '1.5';
	paracetamolDosageOralMaximal = '300';
	}
else if (6 <= kg && kg < 7)
	{ 
	paracetamolDosageOralMG = '80';
	paracetamolDosageOralML = '2';
	paracetamolDosageOralMaximal = '320';
	}
else if (7 <= kg && kg < 8)
	{ 
	paracetamolDosageOralMG = '100';
	paracetamolDosageOralML = '2.5';
	paracetamolDosageOralMaximal = '400';
	}
else if (8 <= kg && kg < 10)
	{ 
	paracetamolDosageOralMG = '120';
	paracetamolDosageOralML = '3';
	paracetamolDosageOralMaximal = '480';
	}
else if (10 <= kg && kg < 11)
	{ 
	paracetamolDosageOralMG = '140';
	paracetamolDosageOralML = '3.5';
	paracetamolDosageOralMaximal = '560';
	}
else if (11 <= kg && kg < 13)
	{ 
	paracetamolDosageOralMG = '160';
	paracetamolDosageOralML = '4';
	paracetamolDosageOralMaximal = '640';
	}
else if (13 <= kg && kg < 16)
	{ 
	paracetamolDosageOralMG = '200';
	paracetamolDosageOralML = '5';
	paracetamolDosageOralMaximal = '800';
	}
else if (16 <= kg && kg < 19)
	{ 
	paracetamolDosageOralMG = '240';
	paracetamolDosageOralML = '6';
	paracetamolDosageOralMaximal = '960';
	}
else if (19 <= kg && kg < 22)
	{ 
	paracetamolDosageOralMG = '300';
	paracetamolDosageOralML = '7.5';
	paracetamolDosageOralMaximal = '1200';
	}
else if (22 <= kg && kg < 26)
	{ 
	paracetamolDosageOralMG = '320';
	paracetamolDosageOralML = '8';
	paracetamolDosageOralMaximal = '1280';
	}
else if (26 <= kg && kg < 30)
	{ 
	paracetamolDosageOralMG = '400';
	paracetamolDosageOralML = '10';
	paracetamolDosageOralMaximal = '1600';
	}
else if (30 <= kg && kg < 33)
	{ 
	paracetamolDosageOralMG = '440';
	paracetamolDosageOralML = '11';
	paracetamolDosageOralMaximal = '1760';
	}
else if (33 <= kg && kg < 41)
	{ 
	paracetamolDosageOralMG = '500';
	paracetamolDosageOralML = '12.5';
	paracetamolDosageOralMaximal = '2000';
	}
;
//end analgesics
//begin muscle relaxants
var succinylcholinDosageMG = '';
var succinylcholinDosageML = '';
var succinylcholinDosageMGString = '';
if (kg <= 10) 
	{succinylcholinDosageMG = (Math.round(kg * 2 * 10) / 10);
	succinylcholinDosageML = (Math.round(kg * 0.4 * 10) / 10);
	succinylcholinDosageMGString = '2 mg/kg KG';}
else if (10 < kg) 
	{succinylcholinDosageMG = (Math.round(kg * 1.5 * 10) / 10);
	succinylcholinDosageML = (Math.round(kg * 0.3 * 10) / 10);
	succinylcholinDosageMGString = '1.5 mg/kg KG';}
;
var mivacuriumDosageMG = '';
var mivacuriumDosageML = '';
var mivacuriumDosageMGString = '';
var mivacuriumTooYoungWarning = false;
if (m < 1) 
	{mivacuriumTooYoungWarning = true; }
else if (1 <= m && m <= 12) 
	{mivacuriumDosageMG = (Math.round(kg * 0.15 * 10) / 10);
	mivacuriumDosageML = (Math.round(kg * 0.15 * 10) / 10);
	mivacuriumDosageMGString = '0.15 mg/kg KG';}
else if (12 < m) 
	{mivacuriumDosageMG = (Math.round(kg * 0.25 * 10) / 10);
	mivacuriumDosageML = (Math.round(kg * 0.25 * 10) / 10);
	mivacuriumDosageMGString = '0.25 mg/kg KG';}
;
var rocuroniumDosageMG = '';
var rocuroniumDosageML = '';
var rocuroniumDosageMGString = '';
if (kg < 5) 
	{rocuroniumDosageMG = (Math.round(kg * 0.3 * 10) / 10);
	rocuroniumDosageML = (Math.round(kg * 0.06 * 10) / 10);
	rocuroniumDosageMGString = '0.3 mg/kg KG';}
else if (5 <= kg && kg <= 10) 
	{rocuroniumDosageMG = (Math.round(kg * 0.3 * 10) / 10) + ' - ' + (Math.round(kg * 0.6 * 10) / 10);
	rocuroniumDosageML = (Math.round(kg * 0.06 * 10) / 10) + ' - ' + (Math.round(kg * 0.12 * 10) / 10);
	rocuroniumDosageMGString = '0.3 - 0.6 mg/kg KG';}
else if (10 < kg) 
	{rocuroniumDosageMG = (Math.round(kg * 0.6 * 10) / 10);
	rocuroniumDosageML = (Math.round(kg * 0.12 * 10) / 10);
	rocuroniumDosageMGString = '0.6 mg/kg KG';}
;
var cisatracuriumDosageMG = '';
var cisatracuriumDosageML = '';
var cisatracuriumDosageMGString = '';
var cisatracuriumTooYoungWarning = false;
	cisatracuriumDosageMG = (Math.round(kg * 0.15 * 10) / 10);
	cisatracuriumDosageML = (Math.round(kg * 0.15 * 10) / 10);
	cisatracuriumDosageMGString = '0.15 mg/kg KG';
if (m < 1) 
	{cisatracuriumTooYoungWarning = true; }
;
var atracuriumDosageMG = '';
var atracuriumDosageML = '';
var atracuriumDosageMGString = '';
var atracuriumSolution = '';
var atracuriumConcentration = '';
var atracuriumTooYoungWarning = false;
if (m < 1) 
	{atracuriumTooYoungWarning = true; }
else if (1 <= m && m <= 3) 
	{
	atracuriumSolution = '1 ml auf 10 ml NaCl';
	atracuriumConcentration = '1 mg / ml';
	atracuriumDosageMG = (Math.round(kg * 0.3 * 10) / 10);
	atracuriumDosageML = (Math.round(kg * 0.3 * 10) / 10);
	atracuriumDosageMGString = '0.3 mg/kg KG';}
else if (3 < m) 
	{
	atracuriumDosageMGString = '0.5 mg/kg KG';	
	atracuriumDosageMG = (Math.round(kg * 0.5 * 10) / 10);
	if (kg <= 20) 
		{
			atracuriumSolution = '1 ml auf 10 ml NaCl';
			atracuriumConcentration = '1 mg / ml';
			atracuriumDosageML = (Math.round(kg * 0.5 * 10) / 10);
		}
	else 
		{
			atracuriumSolution = '2.5 ml auf 5 ml NaCl';
			atracuriumConcentration = '5 mg / ml';
			atracuriumDosageML = (Math.round(kg * 0.1 * 10) / 10);
	
		}
	}
;
var pancuroniumDosageMG = '';
var pancuroniumDosageML = '';
var pancuroniumDosageMGString = '';
if (m < 1) 
	{
	pancuroniumDosageMG = (Math.round(kg * 0.01 * 100) / 100) + ' - ' + (Math.round(kg * 0.02 * 100) / 100);
	pancuroniumDosageML = (Math.round(kg * 0.01 * 5 * 100) / 100) + ' - ' + (Math.round(kg * 0.02 * 5 * 100) / 100);
	pancuroniumDosageMGString = '0.01 - 0.02 mg/kg KG';
	}
else if (1 <= m) 
	{
	pancuroniumDosageMG = (Math.round(kg * 0.1 * 10) / 10);
	pancuroniumDosageML = (Math.round(kg * 0.1 * 5 * 10) / 10);
	pancuroniumDosageMGString = '0.1 mg/kg KG';
	}
;
//end muscle relaxants
//begin antagonists
var pyridostigminDosageMG = '';
var pyridostigminDosageML = '';
var pyridostigminDosageMGString = '';
pyridostigminDosageMG = (Math.round(kg * 0.1 * 10) / 10);
pyridostigminDosageML = (Math.round(kg * 0.1 * 10) / 10);
pyridostigminDosageMGString = '0.1 mg/kg KG';

var naloxonDosageMG = '';
var naloxonDosageML = '';
var naloxonDosageMGString = '';
naloxonDosageMG = (Math.round(kg * 1 * 1) / 1);
naloxonDosageML = (Math.round(kg * 0.05 * 100) / 100);
naloxonDosageMGString = '1 <span style="font-family:opensans;">&micro;</span>g/kg KG';

var flumazenilDosageMG = '';
var flumazenilDosageML = '';
var flumazenilDosageMGString = '';
flumazenilDosageMG = (Math.round(kg * 10 * 10) / 10);
flumazenilDosageML = (Math.round(kg * 0.1 * 10) / 10);
flumazenilDosageMGString = '10 <span style="font-family:opensans;">&micro;</span>g/kg KG';

var neostigminDosageMG = '';
var neostigminDosageML = '';
var neostigminDosageMGString = '';
neostigminDosageMG = (Math.round(kg * 0.05 * 100) / 100);
neostigminDosageML = (Math.round(kg * 0.1 * 100) / 100);
neostigminDosageMGString = '0.05 mg/kg KG';

var physostigminDosageMG = '';
var physostigminDosageML = '';
var physostigminDosageMGString = '';
physostigminDosageMG = (Math.round(kg * 10 * 1) / 1) + ' - ' + (Math.round(kg * 30 * 1) / 1);
physostigminDosageML = (Math.round(kg * 10 / 100 * 10) / 10) + ' - ' + (Math.round(kg * 30 / 100 * 10) / 10);
physostigminDosageMGString = '10 - 30  <span style="font-family:opensans;">&micro;</span>g/kg KG';

//end antagonists
//begin pov
var dexamethasonTooYoungWarning = false;
var dexamethasonDosageMG = '';
var dexamethasonDosageML = '';
var dexamethasonDosageMGString = '';
dexamethasonDosageMG = (Math.round(kg * 0.15 * 10) / 10);
dexamethasonDosageML = (Math.round(kg * 0.15 * 10) / 10);
if (dexamethasonDosageMG > 4)
{
dexamethasonDosageMG = 4;
dexamethasonDosageML = 4;
}
dexamethasonDosageMGString = '0.15 mg/kg KG';
if (m < 24) 
	{dexamethasonTooYoungWarning = true; }
;
var granisetronTooYoungWarning = false;
var granisetronDosageMG = '';
var granisetronDosageML = '';
var granisetronDosageMGString = '';
granisetronDosageMG = (Math.round(kg * 0.02 * 100) / 100);
granisetronDosageML = (Math.round(kg * 1 * 10) / 10);
if (granisetronDosageMG > 1)
{
granisetronDosageMG = 1;
granisetronDosageML = 50;
}
granisetronDosageMGString = '0.02 mg/kg KG';
if (m < 24) 
	{granisetronTooYoungWarning = true; }
;

var dimenhydrinatTooYoungWarning = false;
var dimenhydrinatDosageMG = '';
var dimenhydrinatMaxDosageMG = '';
var dimenhydrinatDosageML = '';
var dimenhydrinatDosageMGString = '';
dimenhydrinatDosageMG = (Math.round(kg * 0.5* 10) / 10);
dimenhydrinatDosageML = (Math.round(kg * 5 / 62 * 10) / 10);
dimenhydrinatMaxDosageMG = (Math.round(kg * 1.25* 10) / 10);
if (dimenhydrinatDosageMG > 62)

{
dimenhydrinatDosageMG = 62;
dimenhydrinatDosageML = 10;
}
dimenhydrinatDosageMGString = '0.5 mg/kg KG';
if (kg < 6) 
	{dimenhydrinatTooYoungWarning = true; }
;
var ondansetronTooYoungWarning = false;
var ondansetronDosageMG = '';
var ondansetronDosageML = '';
var ondansetronDosageMGString = '';
ondansetronDosageMG = (Math.round(kg * 0.1 * 10) / 10);
ondansetronDosageML = (Math.round(kg * 0.1 * 10) / 10);
if (ondansetronDosageMG > 4)
{
ondansetronDosageMG = 4;
ondansetronDosageML = 4;
}
ondansetronDosageMGString = '0.1 mg/kg KG';
if (m < 1) 
	{ondansetronTooYoungWarning = true; }
;
///////////////////////////////////////////////////////////////////////////////////////
// propofolPovDosageMG and propofolPovDosageML defined in propofol section
///////////////////////////////////////////////////////////////////////////////////////
//end pov
//begin emergency
var atropinDosageMG = '';
var atropinDosageML = '';
var atropinDosageMGString = '';
atropinDosageMG = (Math.round(kg * 10 * 1) / 1) + ' - ' + (Math.round(kg * 20 * 1) / 1);
atropinDosageML = (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 0.2 * 10) / 10);
atropinDosageMGString = '10 - 20 <span style="font-family:opensans;">&micro;</span>g/kg KG';
	
var epinephrinDosageMG = '';
var epinephrinDosageML = '';
var epinephrinDosageMGString = '';
epinephrinDosageMG = (Math.round(kg * 10 * 1) / 1);
epinephrinDosageML = (Math.round(kg * 0.1 * 10) / 10);
epinephrinDosageMGString = '10 <span style="font-family:opensans;">&micro;</span>g/kg KG (Reanimation)';

var noradrenalinDosageMG = '';
var noradrenalinDosageML = '';
var noradrenalinDosageMGString = '';
noradrenalinDosageMG =  (Math.round(kg * 0.1 * 10) / 10) + ' - ' + (Math.round(kg * 1 * 10) / 10);
noradrenalinDosageML = (Math.round(kg * 0.1 * 1 * 10) / 10) + ' - ' + (Math.round(kg * 1 * 1 * 10) / 10);
noradrenalinDosageMGString = '0.1 - 1.0  <span style="font-family:opensans;">&micro;</span>g/kg/min';

var dopaminDosageMG = '';
var dopaminDosageML = '';
var dopaminDosageMGString = '';
dopaminDosageMG =  (Math.round(kg * 1 * 10) / 10) + ' - ' + (Math.round(kg * 10 * 10) / 10);
dopaminDosageML = (Math.round(kg * 0.1 * 1 * 10) / 10) + ' - ' + (Math.round(kg * 1 * 1 * 10) / 10);
dopaminDosageMGString = '1 - 10  <span style="font-family:opensans;">&micro;</span>g/kg/min';

var dobutaminDosageMG = '';
var dobutaminDosageML = '';
var dobutaminDosageMGString = '';
dobutaminDosageMG =  (Math.round(kg * 2 * 10) / 10) + ' - ' + (Math.round(kg * 20 * 10) / 10);
dobutaminDosageML = (Math.round(kg * 0.2 * 1 * 10) / 10) + ' - ' + (Math.round(kg * 2 * 1 * 10) / 10);
dobutaminDosageMGString = '2 - 20  <span style="font-family:opensans;">&micro;</span>g/kg/min';

//end emergency
// Ende Mathematik


// Beginn Templates
// begin normwerte template
normWerteTemplate = '<p class="title">Herzfrequenz</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[/min]</p>' +
					'<p class ="values">' + normHeartRate + '</p>';
normWerteTemplate = normWerteTemplate + '<p class="title">Blutdruck</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[mmHg]</p>' +
					'<p class ="values">' + normBloodPressure + '</p>';
normWerteTemplate = normWerteTemplate + '<p class="title">Atemfrequenz</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[/min]</p>' +
					'<p class ="values">' + normRespiratoryRate + '</p>';
normWerteTemplate = normWerteTemplate + '<p class="title">Fl&uuml;ssigkeitsbedarf</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml/kg/h]</p>' +
					'<p class ="values">' + freeWaterRequirementKG + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml/h]</p>' +
					'<p class ="values">' + freeWaterRequirement + '</p>';
normWerteTemplate = normWerteTemplate + '<p class="title">Tidalvolumen</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + normTidalVolume + '</p>';
normWerteTemplate = normWerteTemplate + '<p class="title">Atemminutenvolumen</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml/min]</p>' +
					'<p class ="values">' + normMinuteVolume + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[l/min]</p>' +
					'<p class ="values">' + normMinuteVolumeLiter + '</p>';
normWerteTemplate = normWerteTemplate + '<p class="title">Sauerstoffbedarf</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml/min]</p>' +
					'<p class ="values">' + normOxygenConsumption + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml/kg/min]</p>' +
					'<p class ="values">' + normOxygenConsumptionKG + '</p>';
normWerteTemplate = normWerteTemplate + '<div class="CO2-Production"><p class="title">CO2-Produktion</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml/min]</p>' +
					'<p class ="values">' + normCO2Production + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml/kg/min]</p>' +
					'<p class ="values">' + normCO2ProductionKG + '</p></div>';
normWerteTemplate = normWerteTemplate + '<p class="title">Cardiac Output</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[l/min]</p>' +
					'<p class ="values">' + normCardiacOutput + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[dl/kg/min]</p>' +
					'<p class ="values">' + normCardiacOutputKG + '</p>';
normWerteTemplate = normWerteTemplate + '<p class="title">Blutvolumen</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + bloodVolume + '</p>';
normWerteTemplate = normWerteTemplate + '<p class="description">&nbsp;</p><p class="title">Beatmungsmasken</p>';
if (faceMaskSizeRB != '') {
	normWerteTemplate = normWerteTemplate +	'<p class="description">Rendell-Baker</p>' +
						'<p class ="values">' + faceMaskSizeRB + '</p>';
}
if (faceMaskSizeKS != '') {					
	normWerteTemplate = normWerteTemplate +	'<p class="description">King Systems</p>' +
						'<p class ="values">' + faceMaskSizeKS + '</p>';
}
if (faceMaskSizeAdult != '') {					
	normWerteTemplate = normWerteTemplate +	'<p class="description">Erwachsenenmaske</p>' +
						'<p class ="values">' + faceMaskSizeAdult + '</p>';
}

normWerteTemplate = normWerteTemplate + '<p class="description">&nbsp;</p><p class="title">Larynxmasken</p>' +
					'<p class="description">Larynxmaskengr&ouml;sse</p>' +
					'<p class ="values">' + laryngealMaskSize + '</p>' +
					'<p class="description">Cuffgr&ouml;sse</p>' +
					'<p class ="values">' + laryngealMaskCuffSize + '</p>' +
					'<p class="description">Tubus durch LMA</p>' +
					'<p class ="values">' + laryngealMaskBiggestETT + '</p>' +
					'<p class="description">mit Bronchoskop</p>' +
					'<p class ="values">' + laryngealMaskBronchoscopeSize + '</p>';
normWerteTemplate = normWerteTemplate + '<p class="description">&nbsp;</p><p class="title">Endotrachealtuben</p>' +
					'<p class="description">Spatel</p>' +
					'<p class ="values">' + laryngoscopeBlade + '</p>';
if (tubeSizeUncuffed != '') {
	normWerteTemplate = normWerteTemplate +	'<p class="description">Tubus ohne Cuff</p>' +
																				'<p class ="values">' + tubeSizeUncuffed + '</p>';
}
if (tubeSizeCuffed != '') {					
	normWerteTemplate = normWerteTemplate +	'<p class="description">Tubus mit Cuff</p>' +
																				'<p class ="values">' + tubeSizeCuffed + '</p>';
}
normWerteTemplate = normWerteTemplate + '<p class="description">Tiefe ab Zahnreihe</p>' +
					'<p class ="values">' + tubeInsertionDepth + '</p>';

// ende normwerte template
// begin anesthesia and sedation template
anesthesiaSedationTemplate = '<div id="thiopental" class="thiopental"><p class="title">Thiopental</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">500mg Pulver</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 20ml Aqua</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">25mg/ml</p>' +
					'<p class="description">Trapanal&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + thiopentalDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + thiopentalDosageML + '</p></div>';
anesthesiaSedationTemplate = anesthesiaSedationTemplate + '<div class="propofol"><p class="title" id="title">Propofol' + propofolInductionPercentConcentration + '</p>';
					if (propofolTooYoungWarning == false) 
					{
						anesthesiaSedationTemplate =  anesthesiaSedationTemplate +
						'<p class="description">Disoprivan&#8482;</p>' + 
						'<p class="description">Induktion</p>' + 
						'<p class="units">&nbsp;[mg]</p>' +
						'<p class ="values">' + propofolInductionDosageMG + '</p>' +
						'<p class="description"></p>' +
						'<p class="units">&nbsp;[ml]</p>' +
						'<p class ="values">' + propofolInductionDosageML + '</p>';
						if (secondPropofolConcentration == true)
						{ 
						anesthesiaSedationTemplate =  anesthesiaSedationTemplate +
							'</div>' +
							'<div class="secondpropofol">' +
							'<p class="title">Propofol' + propofolSedationGeneralAnesthesiaPercentConcentration + '</p>';
						}
						anesthesiaSedationTemplate =  anesthesiaSedationTemplate +
						'<p class="description">Sedierung</p>' +
						'<p class="units">&nbsp;[mg/h]</p>' +
						'<p class ="values">' + propofolSedationDosageMG + '</p>' +
						'<p class="description"></p>' +
						'<p class="units">&nbsp;[ml/h]</p>' +
						'<p class ="values">' + propofolSedationDosageML + '</p>' +
						'<p class="description">Narkose</p>' +
						'<p class="units">&nbsp;[mg/h]</p>' +
						'<p class ="values">' + propofolGeneralAnesthesiaDosageMG + '</p>' +
						'<p class="description"></p>' +
						'<p class="units">&nbsp;[ml/h]</p>' +
						'<p class ="values">' + propofolGeneralAnesthesiaDosageML + '</p>';
					}
					else if (propofolTooYoungWarning == true)
					{
						anesthesiaSedationTemplate =  anesthesiaSedationTemplate + '<p class="description">keine Zulassung bei Neugeborenen</p>';			
					};					
					anesthesiaSedationTemplate =  anesthesiaSedationTemplate + '</div>';
	
anesthesiaSedationTemplate = anesthesiaSedationTemplate + '<div class="midazolam"><p class="title" id="title">Midazolam</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">' + propofolVialContent + ' pur</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">pur</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">' + propofolConcentration + '</p>' +
//					'<p class="description">Dosis</p>' +
//					'<p class ="values"></p>' +
					'<p class="description">Dormicum&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + midazolamDosageMG + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + midazolamDosageML + '</p></div>';
anesthesiaSedationTemplate = anesthesiaSedationTemplate + '<div class="ketamin"><p class="title" id="title">Ketamin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">' + propofolVialContent + ' pur</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">pur</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">' + propofolConcentration + '</p>' +
//					'<p class="description">Dosis</p>' +
//					'<p class ="values"></p>' +
					'<p class="description">Ketanest&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + ketaminDosageIVMG + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + ketaminDosageIVML + '</p></div>' +												
					'<p class="description">rektal</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + ketaminDosageRectalMG + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + ketaminDosageRectalML + '</p></div>';
anesthesiaSedationTemplate = anesthesiaSedationTemplate + '<div class="esketamin"><p class="title" id="title">Esketamin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">' + propofolVialContent + ' pur</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">pur</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">' + propofolConcentration + '</p>' +
//					'<p class="description">Dosis</p>' +
//					'<p class ="values"></p>' +
					'<p class="description">Ketanest&#8482; S</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + esketaminDosageIVMG + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + esketaminDosageIVML + '</p></div>' +												
					'<p class="description">rektal</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + esketaminDosageRectalMG + '</p>' +
					'<p class="description"></p>' +
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + esketaminDosageRectalML + '</p></div>';	
// end anesthesia and sedation template
// begin analgesics template
analgesicsTemplate = '<div class="alfentanil"><p class="title">Alfentanil</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">1 mg / 2 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 10 ml Sterofundin</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">0,1 mg/ml</p>' +
					'<p class="description">Rapifen&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + alfentanilDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + alfentanilDosageML + '</p>' +
					'<p class="footnote">in zwei Einzeldosen</p></div>';
analgesicsTemplate = analgesicsTemplate + '<div class="sufentanil"><p class="title">Sufentanil</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">10 <span style="font-family:opensans;">&micro;</span>g / 2 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">' + sufentanilSolution + '</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">' + sufentanilConcentration + '</p>' +
					'<p class="description">Sufenta&#8482;</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
					'<p class ="values">' + sufentanilDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + sufentanilDosageML + '</p>' +
					'<p class="footnote">in zwei Einzeldosen f&uuml;r ca. 1h OP-Dauer</p></div>';
analgesicsTemplate = analgesicsTemplate + '<div class="piritramid"><p class="title">Piritramid</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">15 mg / 2 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 15 ml Sterofundin</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">1 mg/ml</p>' +
					'<p class="description">Dipidolor&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + piritramidDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + piritramidDosageML + '</p></div>';
analgesicsTemplate = analgesicsTemplate + '<div class="nalbuphin"><p class="title">Nalbuphin</p>';
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">10 mg / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 10 ml Sterofundin</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">1 mg/ml</p>' +

					if (nalbuphinTooYoungWarning == false) 
					{
						analgesicsTemplate =  analgesicsTemplate + '<p class="description">Nalpain&#8482;</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + nalbuphinDosageMG + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + nalbuphinDosageML + '</p>';
					}
					else if (nalbuphinTooYoungWarning == true)
					{
						analgesicsTemplate =  analgesicsTemplate + '<p class="description">keine Daten &lt; 1.5 Jahren</p>';			
					};					
					analgesicsTemplate =  analgesicsTemplate + '</div>';
analgesicsTemplate = analgesicsTemplate + '<div class="remifentanil"><p class="title">Remifentanil</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">2 mg Pulver</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 100 ml Sterofundin</p>' +
//					remifentanilSolutionBelow30 + 
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">' + remifentanilConcentration + '</p>' +
					'<p class="description">Ultiva&#8482; Bolus</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
					'<p class ="values">' + remifentanilInductionDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + remifentanilInductionDosageML + '</p></div>' +
					'<p class="description">TIVA</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g/min]</p>' +
					'<p class ="values">' + remifentanilGeneralAnesthesiaDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml/h]</p>' +
					'<p class ="values">' + remifentanilGeneralAnesthesiaDosageML + '</p></div>';
analgesicsTemplate = analgesicsTemplate + '<div class="fentanyl"><p class="title">Fentanyl</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">' + fentanylVialContent + '</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">' + fentanylSolution + '</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">' + fentanylConcentration + '</p>' +
					'<p class="description">Fentanyl&#8482;</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
					'<p class ="values">' + fentanylDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + fentanylDosageML + '</p></div>';
analgesicsTemplate = analgesicsTemplate + '<div class="clonidin"><p class="title">Clonidin</p>';
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">150 &micro;g / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 10 ml Sterofundin</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">15 &micro;g/ml</p>' +

					if (clonidinTooYoungWarning == false) 
					{
						analgesicsTemplate =  analgesicsTemplate + '<p class="description">Catapresan&#8482;</p>' +
									'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
									'<p class ="values">' + clonidinDosageMG + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + clonidinDosageML + '</p>';
					}
					else if (clonidinTooYoungWarning == true)
					{
						analgesicsTemplate =  analgesicsTemplate + '<p class="description">keine Daten &lt; 1 Jahr</p>';			
					};					
					analgesicsTemplate =  analgesicsTemplate + '</div>';
analgesicsTemplate = analgesicsTemplate + '<div class="metamizol"><p class="title">Metamizol</p>';
//					'<p class="description">Novalgin Injektion</p>' +
//					'<p class ="values"></p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">1 g / 2 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">2 ml auf 10 ml Sterofundin</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">100 mg/ml</p>' +

//					'<p class="description">Novalgin Tropfen</p>' +
//					'<p class ="values"></p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">mehrere Gr&ouml;ssen</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">pur</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">25 mg/gtt</p>' +
//					'<p class="description"></p>' +
//					'<p class ="values">500 mg/ml</p>' +

					if (metamizolTooYoungWarning == false) 
					{
						analgesicsTemplate =  analgesicsTemplate + '<p class="description">Novalgin&#8482; Injektion</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + metamizolDosageIVMG + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + metamizolDosageIVML + '</p>' +
									
									'<p class="description">Novalgin&#8482; Tropfen</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + metamizolDosageOralMG + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[gtt]</p>' +
									'<p class ="values">' + metamizolDosageOralGTT + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + metamizolDosageOralML + '</p>';
					}
					else if (metamizolTooYoungWarning == true)
					{
						analgesicsTemplate =  analgesicsTemplate + '<p class="description">keine Zulassung &lt; 3 Monate und &lt; 5 kg</p>';			
					};					
					analgesicsTemplate =  analgesicsTemplate + '</div>';
					analgesicsTemplate = analgesicsTemplate + '<div class="ibuprofen"><p class="title">Ibuprofen</p>';
					//					'<p class="descriptionbold">Nurofensaft 2%</p>' +
					//					'<p class ="values"></p>' +
					//					'<p class="description">Ampulleninhalt</p>' +
					//					'<p class ="values">2000 mg / 100 ml</p>' +
					//					'<p class="description">Verd&uuml;nnung</p>' +
					//					'<p class ="values">pur</p>' +
					//					'<p class="description">Konzentration</p>' +
					//					'<p class ="values">20 mg/ml</p>' +
					
					//					'<p class="descriptionbold">Nurofensaft 4%</p>' +
					//					'<p class ="values"></p>' +
					//					'<p class="description">Ampulleninhalt</p>' +
					//					'<p class ="values">4000 mg / 100 ml</p>' +
					//					'<p class="description">Verd&uuml;nnung</p>' +
					//					'<p class ="values">pur</p>' +
					//					'<p class="description">Konzentration</p>' +
					//					'<p class ="values">40 mg/ml</p>' +
					
										if (ibuprofenTooYoungWarning == false) 
										{
											analgesicsTemplate =  analgesicsTemplate + '<p class="description">Nurofensaft&#8482; 2%</p>' +
														'<p class="units">&nbsp;[mg]</p>' +
														'<p class ="values">' + ibuprofenDosageMG + '</p>' +
														'<p class="description"></p>' +					
														'<p class="units">&nbsp;[ml]</p>' +
														'<p class ="values">' + ibuprofen2PerCentDosageML + '</p>' +
														'<p class="description">Nurofensaft&#8482; 4%</p>' +
														'<p class="units">&nbsp;[mg]</p>' +
														'<p class ="values">' + ibuprofenDosageMG + '</p>' +
														'<p class="description"></p>' +					
														'<p class="units">&nbsp;[ml]</p>' +
														'<p class ="values">' + ibuprofen4PerCentDosageML + '</p>';
										}
										else if (ibuprofenTooYoungWarning == true)
										{
											analgesicsTemplate =  analgesicsTemplate + '<p class="description">keine Zulassung &lt; 6 Monaten und &lt; 5 kg</p>';			
										};					
										analgesicsTemplate =  analgesicsTemplate + '</div>';
analgesicsTemplate = analgesicsTemplate + '<div class="paracetamol"><p class="title">Paracetamol</p>';
//					'<p class="description">Perfalgan Infusion</p>' +
//					'<p class ="values"></p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">1000 mg / 100 ml</p>' +
//					'<p class="description"></p>' +
//					'<p class ="values">500 mg / 50 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">pur</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">10 mg/ml</p>' +

//					'<p class="description">ben-u-ron Z&auml;pfchen</p>' +
//					'<p class ="values"></p>' +

//					'<p class="description">ben-u-ron Saft</p>' +
//					'<p class ="values"></p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">4000 mg / 100 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">pur</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">40 mg/ml</p>' +
					if (paracetamolTooYoungWarning == false) 
					{
					
						analgesicsTemplate =  analgesicsTemplate + '<p class="description">Perfalgan&#8482; Infusion</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + paracetamolDosageIVMG + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + paracetamolDosageIVML + '</p>' +
									
									'<p class="description">ben-u-ron&#8482; Z&auml;pfchen</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + paracetamolDosageRectalMG + '</p></div>' +				
				
									'<p class="description">ben-u-ron&#8482; Saft</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + paracetamolDosageOralMG + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + paracetamolDosageOralML + '</p>';	
					
					}
					else if (paracetamolTooYoungWarning == true)
					{
						analgesicsTemplate =  analgesicsTemplate + '<p class="description">keine Zulassung &lt; 3 kg</p>';			
					};					
					analgesicsTemplate =  analgesicsTemplate + '</div>';				
// end analgesics template
//begin muscle relaxants template
musclerelaxantsTemplate =  '<div class="succinylcholin"><p class="title">Succinylcholin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">100 mg / 5 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">2,5 ml + 7,5 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">5 mg/ml</p>' +
					'<p class="description">Lysthenon&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + succinylcholinDosageMG + '</p>' +
					'<p class="description">Pantolax&#8482;</p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + succinylcholinDosageML + '</p></div>';
musclerelaxantsTemplate =  musclerelaxantsTemplate + '<div class="mivacurium"><p class="title">Mivacurium</p>';
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">10 mg / 5 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">5 ml + 5 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">1 mg/ml</p>' +
					if (mivacuriumTooYoungWarning == false) 
					{
						musclerelaxantsTemplate =  musclerelaxantsTemplate + '<p class="description">Mivacron&#8482;</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + mivacuriumDosageMG + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + mivacuriumDosageML + '</p>';
					}
					else if (mivacuriumTooYoungWarning == true)
					{
						musclerelaxantsTemplate =  musclerelaxantsTemplate + '<p class="description">keine Zulassung bei Neugeborenen</p>';			
					};					
					musclerelaxantsTemplate =  musclerelaxantsTemplate + '</div>';
musclerelaxantsTemplate =  musclerelaxantsTemplate + '<div class="rocuronium"><p class="title">Rocuronium</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">50 mg / 5 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">5 ml + 5 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">5 mg/ml</p>' +
					'<p class="description">Esmeron&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + rocuroniumDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + rocuroniumDosageML + '</p></div>';
musclerelaxantsTemplate =  musclerelaxantsTemplate + '<div class="cisatracurium"><p class="title">Cisatracurium</p>';
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">10 mg / 5 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">5 ml + 5 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">1 mg/ml</p>' +
					if (cisatracuriumTooYoungWarning == false) 
					{					
						musclerelaxantsTemplate =  musclerelaxantsTemplate + '<p class="description">Nimbex&#8482;</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + cisatracuriumDosageMG + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + cisatracuriumDosageML + '</p>';
					}
					else if (cisatracuriumTooYoungWarning == true)
					{
						musclerelaxantsTemplate =  musclerelaxantsTemplate + '<p class="description">keine Zulassung bei Neugeborenen</p>';			
					};
					musclerelaxantsTemplate =  musclerelaxantsTemplate + '</div>';
musclerelaxantsTemplate =  musclerelaxantsTemplate + '<div class="atracurium"><p class="title">Atracurium</p>';
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">25 mg / 5 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">' + atracuriumSolution + '</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">' + atracuriumConcentration + '</p>' +
					if (atracuriumTooYoungWarning == false) 
					{					
						musclerelaxantsTemplate =  musclerelaxantsTemplate + '<p class="description">Tracrium&#8482; (A,CH)</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + atracuriumDosageMG + '</p>' +
									'<p class="description"></p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + atracuriumDosageML + '</p>';
					}
					else if (atracuriumTooYoungWarning == true)
					{
						musclerelaxantsTemplate =  musclerelaxantsTemplate + '<p class="description">keine Zulassung bei Neugeborenen</p>';			
					};
					musclerelaxantsTemplate =  musclerelaxantsTemplate + '</div>';
musclerelaxantsTemplate =  musclerelaxantsTemplate + '<div class="pancuronium"><p class="title">Pancuronium</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">4 mg / 2 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 20 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">0.2 mg/ml</p>' +
					'<p class="description">Pavulon&#8482; (A,CH)</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + pancuroniumDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + pancuroniumDosageML + '</p></div>';
//end muscle relaxants template
//begin antagoniststemplate
antagonistsTemplate =  '<div class="pyridostigmin"><p class="title">Pyridostigmin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">5 mg / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">1 ml + 4 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">1 mg/ml</p>' +
					'<p class="description">Kalymin&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + pyridostigminDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + pyridostigminDosageML + '</p>' +
					'<p class="footnote">+ 10-20 <span style="font-family:opensans;">&micro;</span>g/kg KG Atropin </p></div>';
antagonistsTemplate =  antagonistsTemplate + '<div class="naloxon"><p class="title">Naloxon</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">400 <span style="font-family:opensans;">&micro;</span>g / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 20 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">20 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +
					'<p class="description">Narcanti&#8482;</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
					'<p class ="values">' + naloxonDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + naloxonDosageML + '</p></div>';
antagonistsTemplate =  antagonistsTemplate + '<div class="flumazenil"><p class="title">Flumazenil</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">500 <span style="font-family:opensans;">&micro;</span>g / 5 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">1 ml + 4 ml SF</p>' +
//					'<p class ="values">davon 1 ml in 1ml Spritze</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">2 <span style="font-family:opensans;">&micro;</span>g / 0,1 ml</p>' +
					'<p class="description">Anexate&#8482;</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
					'<p class ="values">' + flumazenilDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + flumazenilDosageML + '</p></div>';
antagonistsTemplate =  antagonistsTemplate + '<div class="neostigmin"><p class="title">Neostigmin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">0.5 mg / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">pur</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">0.5 mg/ml</p>' +
					'<p class="description">Prostigmin&#8482; (CH), Normastigmin&#8482; (A)</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + neostigminDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + neostigminDosageML + '</p>' +
					'<p class="footnote">+ 10-20 <span style="font-family:opensans;">&micro;</span>g/kg KG Atropin </p></div>';
antagonistsTemplate =  antagonistsTemplate + '<div class="physostigmin"><p class="title">Physostigmin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">2 mg / 5 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 20 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">100 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +
					'<p class="description">Anticholium&#8482;</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
					'<p class ="values">' + physostigminDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + physostigminDosageML + '</p></div>';
//end antagoniststemplate
//begin povtemplate
povTemplate = '<div class="povoc"><p class="title" style="text-align:center; width: 100%;">&lt;&lt; POVOC-Score &gt;&gt;</p></div>';
povTemplate =  povTemplate + '<div class="dexamethason"><p class="title">Dexamethason</p>';
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">4 mg / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">1 ml + 3 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">1 mg/ml</p>' +
					if (dexamethasonTooYoungWarning == false) 
					{
						povTemplate =  povTemplate + '<p class="description">Fortecortin&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + dexamethasonDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + dexamethasonDosageML + '</p>';
					}
					else if (dexamethasonTooYoungWarning == true)
					{
						povTemplate =  povTemplate + '<p class="description">keine Zulassung &lt; 2 Jahren</p>';			
					};					
					povTemplate =  povTemplate + '</div>';
povTemplate =  povTemplate + '<div class="granisetron"><p class="title">Granisetron</p>';
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">1 mg / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">1 ml + 49 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">0.02 mg/ml</p>' +

					if (granisetronTooYoungWarning == false) 
					{
						povTemplate =  povTemplate + '<p class="description">Kevatril&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + granisetronDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + granisetronDosageML + '</p>';
					}
					else if (granisetronTooYoungWarning == true)
					{
						povTemplate =  povTemplate + '<p class="description">keine Zulassung &lt; 2 Jahren</p>';			
					};					
					povTemplate =  povTemplate + '</div>';
povTemplate =  povTemplate + '<div class="dimenhydrinat"><p class="title">Dimenhydrinat</p>';
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">62 mg / 10 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">pur</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">6.2 mg/ml</p>' +

					if (dimenhydrinatTooYoungWarning == false) 
					{
						povTemplate =  povTemplate + '<p class="description">Vomex</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + dimenhydrinatDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + dimenhydrinatDosageML + '</p>';
					}
					else if (dimenhydrinatTooYoungWarning == true)
					{
						povTemplate =  povTemplate + '<p class="description">keine Zulassung &lt; 6 kg</p>';			
					};					
					povTemplate =  povTemplate + '</div>';
povTemplate =  povTemplate + '<div class="propofolPov"><p class="title">Propofol</p>';

					if (propofolTooYoungWarning == false) 
					{
						povTemplate =  povTemplate + '<p class="description">Disoprivan&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + propofolPovDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + propofolPovDosageML + '</p>';
					}
					else if (propofolTooYoungWarning == true)
					{
						povTemplate =  povTemplate + '<p class="description">keine Zulassung bei Neugeborenen</p>';			
					};					
					povTemplate =  povTemplate + '</div>';
povTemplate =  povTemplate + '<div class="ondansetron"><p class="title">Ondansetron</p>';
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">4 mg / 2 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">auf 4 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">1 mg/ml</p>' +

					if (ondansetronTooYoungWarning == false) 
					{
						povTemplate =  povTemplate + '<p class="description">Zofran&#8482;</p>' +
					'<p class="units">&nbsp;[mg]</p>' +
					'<p class ="values">' + ondansetronDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + ondansetronDosageML + '</p>';
					}
					else if (ondansetronTooYoungWarning == true)
					{
						povTemplate =  povTemplate + '<p class="description">keine Zulassung bei Neugeborenen</p>';	
					};					
					povTemplate =  povTemplate + '</div>';
//end povtemplate
//begin emergencyTemplate
emergencyTemplate = '<div class="atropin"><p class="title">Atropin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">0.5 mg / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">1 ml + 4 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">100 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +
					'<p class="description">Atropinsulfat</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
					'<p class ="values">' + atropinDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + atropinDosageML + '</p></div>';
emergencyTemplate = emergencyTemplate + '<div class="epinephrin"><p class="title">Epinephrin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">1 mg / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">1 ml + 9 ml SF</p>' +
//					'<p class ="values">davon 1 ml in 1ml Spritze</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">100 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
					'<p class="description">Suprarenin&#8482</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
					'<p class ="values">' + epinephrinDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml]</p>' +
					'<p class ="values">' + epinephrinDosageML + '</p></div>';
emergencyTemplate = emergencyTemplate + '<div class="noradrenalin"><p class="title">Noradrenalin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">1 mg / 1 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">3 mg auf 50 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">60 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
					'<p class="description">Arterenol&#8482</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g/min]</p>' +
					'<p class ="values">' + noradrenalinDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml/h]</p>' +
					'<p class ="values">' + noradrenalinDosageML + '</p></div>';
emergencyTemplate = emergencyTemplate + '<div class="dopamin"><p class="title">Dopamin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">50 mg / 5 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">3 ml auf 50 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">600 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
					'<p class="description">Dopamin&#8482</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g/min]</p>' +
					'<p class ="values">' + dopaminDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml/h]</p>' +
					'<p class ="values">' + dopaminDosageML + '</p></div>';
emergencyTemplate = emergencyTemplate + '<div class="dobutamin"><p class="title">Dobutamin</p>' +
//					'<p class="description">Ampulleninhalt</p>' +
//					'<p class ="values">250 mg / 50 ml</p>' +
//					'<p class="description">Verd&uuml;nnung</p>' +
//					'<p class ="values">6 ml auf 50 ml SF</p>' +
//					'<p class="description">Konzentration</p>' +
//					'<p class ="values">600 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
					'<p class="description">Inotop&#8482 (A)</p>' +
					'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g/min]</p>' +
					'<p class ="values">' + dobutaminDosageMG + '</p>' +
					'<p class="description"></p>' +					
					'<p class="units">&nbsp;[ml/h]</p>' +
					'<p class ="values">' + dobutaminDosageML + '</p></div>';
//end emergencyTemplate
// Ende Templates
//layout: 'fit',
//layoutOnOrientationChange: true,
//plugins: [new Ext.ux.touch.SwipeTabs()],
var BottomTabs = new Ext.TabPanel({
fullscreen: true,
floating: false,



    items: [{
        xtype: 'toolbar',
        title: '<span>[ ' + weight_kg + '.' + weight_g + 'kg ]  [ ' + age_years + ' Jahre ' + age_months + ' Monate ]</span>',
        docked: 'top',
        ui: 'light',
        items: [ { 
				xtype: 'button', 
				ui: 'small', 
				text: 'Neu', 
				handler: function() {
					location.reload();
				}
			} ]
    }],
    tabBar: {
        docked: 'bottom',
        ui: 'light',
        layout: {
            pack: 'center'
        }
    },
    cardSwitchAnimation: false,
    defaults: {
        scrollable: 'vertical'
    },
    items: [{
        title: 'Nor',
        html: normWerteTemplate + '',
        cls: 'card card1'
    },
    {
        title: 'Hyp',
        html: anesthesiaSedationTemplate + '',
        cls: 'card card2',
    },
    {
        title: 'Ana',
        id: 'tab3',
        html: analgesicsTemplate + '',
        cls: 'card card3',
    },
    {
        title: 'Rel',
        html: musclerelaxantsTemplate + '',
        cls: 'card card4',
    },
    {
        title: 'Ant',
        html: antagonistsTemplate + '',
        cls: 'card card5',

    },
    {
        title: 'Pov',
        html: povTemplate + '',
        cls: 'card card6',

    },
    {
        title: 'Not',
        html: emergencyTemplate + '',
        cls: 'card card7',


  
    }]
})

        Ext.get('div.thiopental').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
    						width: Ext.os.is.Phone ? 300 : 600,
							height: Ext.os.is.Phone ? 300 : 600,                            
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">500 mg Pulver</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">auf 20ml Aqua</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">25 mg/ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + thiopentalDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + thiopentalDosageMG + '</p>' +
							'<p class="description">bei 25 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + thiopentalDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Thiopental'
		                    }]
		                });
		               this.popup.show('pop');
		});
		if (propofolTooYoungWarning == false) 
		{
			if (secondPropofolConcentration == false)
			// show one popup for all
			{
								Ext.select('div.propofol').on('click', function(){
								                this.popup = new Ext.Panel({
								                    floating: true,
								                    modal: true,
								                    centered: true,
													width: Ext.is.Phone ? 300 : 600,
													height: Ext.is.Phone ? 300 : 600,
								                    styleHtmlContent: true,
								                    scrollable: 'vertical',
								                    html: '<p class="description">Ampulleninhalt</p>' +
													'<p class ="values">' + propofolInductionVialContent + '</p>' +
													'<p class="description">Verd&uuml;nnung</p>' +
													'<p class ="values">pur</p>' +
													'<p class="description">Konzentration</p>' +
													'<p class ="values">' + propofolInductionConcentration + '</p>' +
													'<p class="description">Induktion</p>' +
													'<p class ="values">2-5 mg/kg</p>' + 
													'<p class="description">bei ' + kg + ' kg</p>' +
													'<p class="units">&nbsp;[mg]</p>' +
													'<p class ="values">' + propofolInductionDosageMG + '</p>' +
													'<p class="description">bei ' + propofolInductionConcentration + '</p>' +					
													'<p class="units">&nbsp;[ml]</p>' +
													'<p class ="values">' + propofolInductionDosageML + '</p>' +
													'<p class="description">Sedierung</p>' +
													'<p class ="values">2 mg/kg/h</p>' + 
													'<p class="description">bei ' + kg + ' kg</p>' +
													'<p class="units">&nbsp;[mg/h]</p>' +
													'<p class ="values">' + propofolSedationDosageMG + '</p>' +
													'<p class="description">bei ' + propofolSedationGeneralAnesthesiaConcentration + '</p>' +					
													'<p class="units">&nbsp;[ml/h]</p>' +
													'<p class ="values">' + propofolSedationDosageML + '</p>' +
													'<p class="description">Narkose</p>' +	
													'<p class ="values">8-10 mg/kg/h</p>' + 
													'<p class="description">bei ' + kg + ' kg</p>' +
													'<p class="units">&nbsp;[mg/h]</p>' +
													'<p class ="values">' + propofolGeneralAnesthesiaDosageMG + '</p>' +
													'<p class="description">bei ' + propofolSedationGeneralAnesthesiaConcentration + '</p>' +					
													'<p class="units">&nbsp;[ml/h]</p>' +
													'<p class ="values">' + propofolGeneralAnesthesiaDosageML + '</p>',												
								                    items: [{
								                        docked: 'top',
								                        xtype: 'toolbar',
								                        title: 'Propofol' + propofolInductionPercentConcentration
								                    }]
								                });
								               this.popup.show('pop');
								});
								
			}
			else if (secondPropofolConcentration == true)
			// show 2 popups, one for induction, one for sedation / ga
			{
								Ext.select('div.propofol').on('click', function(){
								                this.popup = new Ext.Panel({
								                    floating: true,
								                    modal: true,
								                    centered: true,
													width: Ext.is.Phone ? 300 : 600,
													height: Ext.is.Phone ? 300 : 600,
								                    styleHtmlContent: true,
								                    scrollable: 'vertical',
								                    html: '<p class="description">Ampulleninhalt</p>' +
													'<p class ="values">' + propofolInductionVialContent + '</p>' +
													'<p class="description">Verd&uuml;nnung</p>' +
													'<p class ="values">pur</p>' +
													'<p class="description">Konzentration</p>' +
													'<p class ="values">' + propofolInductionConcentration + '</p>' +
													'<p class="description">Induktion</p>' +
													'<p class ="values">2-5 mg/kg</p>' + 
													'<p class="description">bei ' + kg + ' kg</p>' +
													'<p class="units">&nbsp;[mg]</p>' +
													'<p class ="values">' + propofolInductionDosageMG + '</p>' +
													'<p class="description">bei ' + propofolInductionConcentration + '</p>' +					
													'<p class="units">&nbsp;[ml]</p>' +
													'<p class ="values">' + propofolInductionDosageML + '</p>',												
								                    items: [{
								                        docked: 'top',
								                        xtype: 'toolbar',
								                        title: 'Propofol' + propofolInductionPercentConcentration
								                    }]
								                });
								               this.popup.show('pop');
								});
								Ext.select('div.secondpropofol').on('click', function(){
								                this.popup = new Ext.Panel({
								                    floating: true,
								                    modal: true,
								                    centered: true,
													width: Ext.is.Phone ? 300 : 600,
													height: Ext.is.Phone ? 300 : 600,
								                    styleHtmlContent: true,
								                    scrollable: 'vertical',
								                    html: '<p class="description">Ampulleninhalt</p>' +
													'<p class ="values">' + propofolSedationGeneralAnesthesiaVialContent + '</p>' +
													'<p class="description">Verd&uuml;nnung</p>' +
													'<p class ="values">pur</p>' +
													'<p class="description">Konzentration</p>' +
													'<p class ="values">' + propofolSedationGeneralAnesthesiaConcentration + '</p>' +
													'<p class="description">Sedierung</p>' +
													'<p class ="values">2 mg/kg/h</p>' + 
													'<p class="description">bei ' + kg + ' kg</p>' +
													'<p class="units">&nbsp;[mg/h]</p>' +
													'<p class ="values">' + propofolSedationDosageMG + '</p>' +
													'<p class="description">bei 20 mg/ml</p>' +					
													'<p class="units">&nbsp;[ml/h]</p>' +
													'<p class ="values">' + propofolSedationDosageML + '</p>' +
													'<p class="description">Narkose</p>' +	
													'<p class ="values">8-10 mg/kg/h</p>' + 
													'<p class="description">bei ' + kg + ' kg</p>' +
													'<p class="units">&nbsp;[mg/h]</p>' +
													'<p class ="values">' + propofolGeneralAnesthesiaDosageMG + '</p>' +
													'<p class="description">bei 20 mg/ml</p>' +					
													'<p class="units">&nbsp;[ml/h]</p>' +
													'<p class ="values">' + propofolGeneralAnesthesiaDosageML + '</p>',													
								                    items: [{
								                        docked: 'top',
								                        xtype: 'toolbar',
								                        title: 'Propofol' + propofolSedationGeneralAnesthesiaPercentConcentration
								                    }]
								                });
								               this.popup.show('pop');
								});
			// end if secondPropofol
			}
		//end if propofolTooYoungWarning
		}
		Ext.select('div.midazolam').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">5 mg / 5 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">pur</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">1 mg / ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + midazolamDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + midazolamDosageMG + '</p>' +
							'<p class="description">bei 1 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + midazolamDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Midazolam'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.ketamin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">50 mg / 5 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">pur</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">10 mg / ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values" style="text-align:right;">' + ketaminDosageIVMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + ketaminDosageIVMG + '</p>' +
							'<p class="description">bei 10 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + ketaminDosageIVML + '</p>' +
							'<p class="description">rektal</p>' +
							'<p class ="values" style="text-align:right;">' + ketaminDosageRectalMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + ketaminDosageRectalMG + '</p>' +
							'<p class="description">bei 10 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + ketaminDosageRectalML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Ketamin'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.esketamin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">25 mg / 5 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">pur</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">5 mg / ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values" style="text-align:right;">' + esketaminDosageIVMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + esketaminDosageIVMG + '</p>' +
							'<p class="description">bei 5 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + esketaminDosageIVML + '</p>' +
							'<p class="description">rektal</p>' +
							'<p class ="values" style="text-align:right;">' + esketaminDosageRectalMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + esketaminDosageRectalMG + '</p>' +
							'<p class="description">bei 5 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + esketaminDosageRectalML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Esketamin'
		                    }]
		                });
		               this.popup.show('pop');
		});       
		Ext.select('div.alfentanil').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">1 mg / 2 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">auf 10 ml Sterofundin</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">0,1 mg/ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + alfentanilDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + alfentanilDosageMG + '</p>' +
							'<p class="description">bei 0.1 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + alfentanilDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Alfentanil'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.sufentanil').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">10 <span style="font-family:opensans;">&micro;</span>g / 2 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">' + sufentanilSolution + '</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">' + sufentanilConcentration + '</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + sufentanilDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
							'<p class ="values">' + sufentanilDosageMG + '</p>' +
							'<p class="description">bei ' + sufentanilConcentration + '</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + sufentanilDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Sufentanil'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.piritramid').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">15 mg / 2 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">auf 15 ml Sterofundin</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">1 mg/ml</p>' +					
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + piritramidDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + piritramidDosageMG + '</p>' +
							'<p class="description">bei 1 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + piritramidDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Piritramid'
		                    }]
		                });
		               this.popup.show('pop');
		});
		if (nalbuphinTooYoungWarning == false) 
		{		
			Ext.select('div.nalbuphin').on('click', function(){
			                this.popup = new Ext.Panel({
			                    floating: true,
			                    modal: true,
			                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
			                    styleHtmlContent: true,
			                    scrollable: 'vertical',
			                    html: '<p class="description">Ampulleninhalt</p>' +
								'<p class ="values">10 mg / 1 ml</p>' +
								'<p class="description">Verd&uuml;nnung</p>' +
								'<p class ="values">auf 10 ml SF</p>' +
								'<p class="description">Konzentration</p>' +
								'<p class ="values">1 mg/ml</p>' +		
								'<p class="description">Dosierung</p>' +
								'<p class ="values">' + nalbuphinDosageMGString + '</p>' + 
								'<p class="description">bei ' + kg + ' kg</p>' +
								'<p class="units">&nbsp;[mg]</p>' +
								'<p class ="values">' + nalbuphinDosageMG + '</p>' +
								'<p class="description">bei 1 mg/ml</p>' +					
								'<p class="units">&nbsp;[ml]</p>' +
								'<p class ="values">' + nalbuphinDosageML + '</p>',									
			                    items: [{
			                        docked: 'top',
			                        xtype: 'toolbar',
			                        title: 'Nalbuphin'
			                    }]
			                });
			               this.popup.show('pop');
			});
		//end if nalbuphinTooYoungWarning
		}
				Ext.select('div.remifentanil').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">2 mg Pulver</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">auf 100 ml SF</p>' +
							remifentanilSolutionBelow30 + 
							'<p class="description">Konzentration</p>' +
							'<p class ="values">' + remifentanilConcentration + '</p>' +
							'<p class="description">Induktion</p>' +
							'<p class ="values">' + remifentanilInductionDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
							'<p class ="values">' + remifentanilInductionDosageMG + '</p>' +
							'<p class="description">bei ' + remifentanilConcentration + '</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + remifentanilInductionDosageML + '</p>' +									
							'<p class="description">TIVA</p>' +
							'<p class ="values">' + remifentanilGeneralAnesthesiaDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g/min]</p>' +
							'<p class ="values">' + remifentanilGeneralAnesthesiaDosageMG + '</p>' +
							'<p class="description">bei ' + remifentanilConcentration + '</p>' +					
							'<p class="units">&nbsp;[ml/h]</p>' +
							'<p class ="values">' + remifentanilGeneralAnesthesiaDosageML + '</p>',
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Remifentanil'
		                    }]
		                });
		               this.popup.show('pop');
		});
				Ext.select('div.fentanyl').on('click', function(){
				                this.popup = new Ext.Panel({
				                    floating: true,
				                    modal: true,
				                    centered: true,
									width: Ext.is.Phone ? 300 : 600,
									height: Ext.is.Phone ? 300 : 600,
				                    styleHtmlContent: true,
				                    scrollable: 'vertical',
				                    html: '<p class="description">Ampulleninhalt</p>' +
									'<p class ="values">' + fentanylVialContent + '</p>' +
									'<p class="description">Verd&uuml;nnung</p>' +
									'<p class ="values">' + fentanylSolution + '</p>' +
									'<p class="description">Konzentration</p>' +
									'<p class ="values">' + fentanylConcentration + '</p>' +
									'<p class="description">Dosierung</p>' +
									'<p class ="values">' + fentanylDosageMGString + '</p>' + 
									'<p class="description">bei ' + kg + ' kg</p>' +
									'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
									'<p class ="values">' + fentanylDosageMG + '</p>' +
									'<p class="description">bei ' + fentanylConcentration + '</p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + fentanylDosageML + '</p>',									
				                    items: [{
				                        docked: 'top',
				                        xtype: 'toolbar',
				                        title: 'Fentanyl'
				                    }]
				                });
				               this.popup.show('pop');
				});
				if (clonidinTooYoungWarning == false) 
				{		
					Ext.select('div.clonidin').on('click', function(){
					                this.popup = new Ext.Panel({
					                    floating: true,
					                    modal: true,
					                    centered: true,
									width: Ext.is.Phone ? 300 : 600,
									height: Ext.is.Phone ? 300 : 600,
					                    styleHtmlContent: true,
					                    scrollable: 'vertical',
					                    html: '<p class="description">Ampulleninhalt</p>' +
										'<p class ="values">150 <span style="font-family:opensans;">&micro;</span>g / 1 ml</p>' +
										'<p class="description">Verd&uuml;nnung</p>' +
										'<p class ="values">auf 10 ml Sterofundin</p>' +
										'<p class="description">Konzentration</p>' +
										'<p class ="values">15 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +		
										'<p class="description">Dosierung</p>' +
										'<p class ="values">' + clonidinDosageMGString + '</p>' + 
										'<p class="description">bei ' + kg + ' kg</p>' +
										'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
										'<p class ="values">' + clonidinDosageMG + '</p>' +
										'<p class="description">bei 15 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +					
										'<p class="units">&nbsp;[ml]</p>' +
										'<p class ="values">' + clonidinDosageML + '</p>',									
					                    items: [{
					                        docked: 'top',
					                        xtype: 'toolbar',
					                        title: 'Clonidin'
					                    }]
					                });
					               this.popup.show('pop');
					});
				//end if clonidinTooYoungWarning
				}
				if (metamizolTooYoungWarning == false) 
				{			
				Ext.select('div.metamizol').on('click', function(){
				                this.popup = new Ext.Panel({
				                    floating: true,
				                    modal: true,
				                    centered: true,
									width: Ext.is.Phone ? 300 : 600,
									height: Ext.is.Phone ? 300 : 600,
				                    styleHtmlContent: true,
				                    scrollable: 'vertical',
				                    html: 	'<p class="descriptionbold">Novalgin Injektion</p>' +
				        					'<p class ="values"></p>' +
				        					'<p class="description">Ampulleninhalt</p>' +
				        					'<p class ="values">1 g / 2 ml</p>' +
				        					'<p class="description">Verd&uuml;nnung</p>' +
				        					'<p class ="values">2 ml auf 10 ml Sterofundin</p>' +
				        					'<p class="description">Konzentration</p>' +
				        					'<p class ="values">100 mg/ml</p>' +
				        	
				                    		'<p class="description">Dosierung</p>' +
				                			'<p class="units">&nbsp;[mg]</p>' +
				                			'<p class ="values">' + metamizolDosageIVMG + '</p>' +
				                			'<p class="description"></p>' +					
				                			'<p class="units">&nbsp;[ml]</p>' +
				                			'<p class ="values">' + metamizolDosageIVML + '</p>' +
				                			'<p class="description">Tagesmaximaldosis</p>' +
				                			'<p class ="values">' + metamizolDosageIVMaximalString + '</p>' +
				                			'<p class="description"></p>' +					
				                			'<p class="units">&nbsp;[mg]</p>' +
				                			'<p class ="values">' + metamizolDosageIVMaximal + '</p>' +
				                			
				                			'<p class="descriptionbold">Novalgin Tropfen</p>' +
				                			'<p class ="values"></p>' +
				                			'<p class="description">Ampulleninhalt</p>' +
				                			'<p class ="values">mehrere Gr&ouml;ssen</p>' +
				                			'<p class="description">Verd&uuml;nnung</p>' +
				                			'<p class ="values">pur</p>' +
				                			'<p class="description">Konzentration</p>' +
				                			'<p class ="values">25 mg/gtt</p>' +
				                			'<p class="description"></p>' +
				                			'<p class ="values">500 mg/ml</p>' +
				                			
				                			'<p class="description">Dosierung</p>' +
				                			'<p class="units">&nbsp;[mg]</p>' +
				                			'<p class ="values">' + metamizolDosageOralMG + '</p>' +
				                			'<p class="description"></p>' +					
				                			'<p class="units">&nbsp;[gtt]</p>' +
				                			'<p class ="values">' + metamizolDosageOralGTT + '</p>' +
				                			'<p class="description"></p>' +					
				                			'<p class="units">&nbsp;[ml]</p>' +
				                			'<p class ="values">' + metamizolDosageOralML + '</p>' +
				                			'<p class="description">Tagesmaximaldosis</p>' +
				                			'<p class="units">&nbsp;[mg]</p>' +
				                			'<p class ="values">' + metamizolDosageOralMaximal + '</p>',						
				                    items: [{
				                        docked: 'top',
				                        xtype: 'toolbar',
				                        title: 'Metamizol'
				                    }]
				                });
				               this.popup.show('pop');
				});
				//end if metamizolTooYoungWarning
				}
				if (ibuprofenTooYoungWarning == false) 
				{			
				Ext.select('div.ibuprofen').on('click', function(){
				                this.popup = new Ext.Panel({
				                    floating: true,
				                    modal: true,
				                    centered: true,
									width: Ext.is.Phone ? 300 : 600,
									height: Ext.is.Phone ? 300 : 600,
				                    styleHtmlContent: true,
				                    scrollable: 'vertical',
				                    html: 	'<p class="descriptionbold">Nurofensaft 2%</p>' +
	                    					'<p class ="values"></p>' +
	                    					'<p class="description">Ampulleninhalt</p>' +
	                    					'<p class ="values">2000 mg / 100 ml</p>' +
	                    					'<p class="description">Verd&uuml;nnung</p>' +
	                    					'<p class ="values">pur</p>' +
	                    					'<p class="description">Konzentration</p>' +
	                    					'<p class ="values">20 mg/ml</p>' +
	                    					
	                    					'<p class="description">Dosierung</p>' +
            								'<p class="units">&nbsp;[mg]</p>' +
            								'<p class ="values">' + ibuprofenDosageMG + '</p>' +
            								'<p class="description"></p>' +					
            								'<p class="units">&nbsp;[ml]</p>' +
            								'<p class ="values">' + ibuprofen2PerCentDosageML + '</p>' +
            								'<p class="description">Tagesmaximaldosis</p>' +
            								'<p class ="values">' + ibuprofenDosageMaximalString + '</p>' +
            								'<p class="description"></p>' +					
            								'<p class="units">&nbsp;[mg]</p>' +
            								'<p class ="values">' + ibuprofenDosageMaximal + '</p>' +
	                    					
	                    					'<p class="descriptionbold">Nurofensaft 4%</p>' +
	                    					'<p class ="values"></p>' +
	                    					'<p class="description">Ampulleninhalt</p>' +
	                    					'<p class ="values">4000 mg / 100 ml</p>' +
	                    					'<p class="description">Verd&uuml;nnung</p>' +
	                    					'<p class ="values">pur</p>' +
	                    					'<p class="description">Konzentration</p>' +
	                    					'<p class ="values">40 mg/ml</p>' +
				        					
				        					'<p class="description">Dosierung</p>' +
				        					'<p class="units">&nbsp;[mg]</p>' +
				        					'<p class ="values">' + ibuprofenDosageMG + '</p>' +
				        					'<p class="description"></p>' +					
				        					'<p class="units">&nbsp;[ml]</p>' +
				        					'<p class ="values">' + ibuprofen4PerCentDosageML + '</p>' +
				        					'<p class="description">Tagesmaximaldosis</p>' +
				        					'<p class ="values">' + ibuprofenDosageMaximalString + '</p>' +
				        					'<p class="description"></p>' +					
				        					'<p class="units">&nbsp;[mg]</p>' +
				        					'<p class ="values">' + ibuprofenDosageMaximal + '</p>',						
				                    items: [{
				                        docked: 'top',
				                        xtype: 'toolbar',
				                        title: 'Ibuprofen'
				                    }]
				                });
				               this.popup.show('pop');
				});
				//end if ibuprofenTooYoungWarning
				}										
				if (paracetamolTooYoungWarning == false) 
				{			
				Ext.select('div.paracetamol').on('click', function(){
				                this.popup = new Ext.Panel({
				                    floating: true,
				                    modal: true,
				                    centered: true,
									width: Ext.is.Phone ? 300 : 600,
									height: Ext.is.Phone ? 300 : 600,
				                    styleHtmlContent: true,
				                    scrollable: 'vertical',
				                    html: '<p class="descriptionbold">Perfalgan Infusionsl&ouml;sung</p>' +
				                    '<p class ="values"></p>' +
				                    '<p class="description">Ampulleninhalt</p>' +
				                   	'<p class ="values">1000 mg / 100 ml</p>' +
				                   	'<p class="description"></p>' +
				                   	'<p class ="values">500 mg / 50 ml</p>' +
				                   	'<p class="description">Verd&uuml;nnung</p>' +
				                    '<p class ="values">pur</p>' +
				                    '<p class="description">Konzentration</p>' +
				                    '<p class ="values">10 mg/ml</p>' +
									'<p class="description">Dosierung</p>' +
									'<p class ="values">' + paracetamolDosageIVMGString + '</p>' + 
									'<p class="description">bei ' + kg + ' kg</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + paracetamolDosageIVMG + '</p>' +
									'<p class="description">bei 10 mg/ml</p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class="values">' + paracetamolDosageIVML + '</p>' +
									'<p class="description">Tagesmaximaldosis</p>' +
									'<p class="values">' + paracetamolDosageIVMaximalString + '</p>'+ 
									'<p class="description"></p>' +
									'<p class="units">&nbsp;[mg]</p>' +									
									'<p class="values">' + paracetamolDosageIVMaximal + '</p>'+ 
									
									'<p class="descriptionbold">ben-u-ron Z&auml;pfchen</p>' +
									'<p class ="values"></p>' +
									'<p class="description">Dosierung</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + paracetamolDosageRectalMG + '</p>' +
									'<p class="description">Tagesmaximaldosis</p>' +
									'<p class="units">&nbsp;[mg]</p>' +									
									'<p class="values">' + paracetamolDosageRectalMaximal + '</p>' +	
									
									'<p class="description"></p>' +
									'<p class ="values"></p>' +
									'<p class="descriptionbold">ben-u-ron Saft</p>' +
									'<p class ="values"></p>' +
									'<p class="description">Ampulleninhalt</p>' +
									'<p class ="values">4000 mg / 100 ml</p>' +
									'<p class="description">Verd&uuml;nnung</p>' +
									'<p class ="values">pur</p>' +
									'<p class="description">Konzentration</p>' +
									'<p class ="values">40 mg/ml</p>' +
									'<p class="description">Dosierung</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + paracetamolDosageOralMG + '</p>' +
									'<p class="description">bei 40 mg/ml</p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class="values">' + paracetamolDosageOralML + '</p>' +
									'<p class="description">Tagesmaximaldosis</p>' +
									'<p class="units">&nbsp;[mg]</p>' +									
									'<p class="values">' + paracetamolDosageOralMaximal + '</p>',							
				                    items: [{
				                        docked: 'top',
				                        xtype: 'toolbar',
				                        title: 'Paracetamol'
				                    }]
				                });
				               this.popup.show('pop');
				});
				//end if paracetamolTooYoungWarning
				}				
		Ext.select('div.succinylcholin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">100 mg / 5 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">2,5 ml + 7,5 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">5 mg/ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + succinylcholinDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + succinylcholinDosageMG + '</p>' +
							'<p class="description">bei 5 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + succinylcholinDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Succinylcholin'
		                    }]
		                });
		               this.popup.show('pop');
		});
		if (mivacuriumTooYoungWarning == false) 
		{		
			Ext.select('div.mivacurium').on('click', function(){
			                this.popup = new Ext.Panel({
			                    floating: true,
			                    modal: true,
			                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
			                    styleHtmlContent: true,
			                    scrollable: 'vertical',
			                    html: '<p class="description">Ampulleninhalt</p>' +
								'<p class ="values">10 mg / 5 ml</p>' +
								'<p class="description">Verd&uuml;nnung</p>' +
								'<p class ="values">5 ml + 5 ml SF</p>' +
								'<p class="description">Konzentration</p>' +
								'<p class ="values">1 mg/ml</p>' +		
								'<p class="description">Dosierung</p>' +
								'<p class ="values">' + mivacuriumDosageMGString + '</p>' + 
								'<p class="description">bei ' + kg + ' kg</p>' +
								'<p class="units">&nbsp;[mg]</p>' +
								'<p class ="values">' + mivacuriumDosageMG + '</p>' +
								'<p class="description">bei 1 mg/ml</p>' +					
								'<p class="units">&nbsp;[ml]</p>' +
								'<p class ="values">' + mivacuriumDosageML + '</p>',									
			                    items: [{
			                        docked: 'top',
			                        xtype: 'toolbar',
			                        title: 'Mivacurium'
			                    }]
			                });
			               this.popup.show('pop');
			});
		//end if mivacuriumTooYoungWarning
		}
		Ext.select('div.rocuronium').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">50 mg / 5 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">5 ml + 5 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">5 mg/ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + rocuroniumDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + rocuroniumDosageMG + '</p>' +
							'<p class="description">bei 5 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + rocuroniumDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Rocuronium'
		                    }]
		                });
		               this.popup.show('pop');
		});					
		if (cisatracuriumTooYoungWarning == false) 
		{
			Ext.select('div.cisatracurium').on('click', function(){
			                this.popup = new Ext.Panel({
			                    floating: true,
			                    modal: true,
			                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
			                    styleHtmlContent: true,
			                    scrollable: 'vertical',
			                    html: '<p class="description">Ampulleninhalt</p>' +
								'<p class ="values">10 mg / 5 ml</p>' +
								'<p class="description">Verd&uuml;nnung</p>' +
								'<p class ="values">5 ml + 5 ml NaCl</p>' +
								'<p class="description">Konzentration</p>' +
								'<p class ="values">1 mg/ml</p>' +							
								'<p class="description">Dosierung</p>' +
								'<p class ="values">' + cisatracuriumDosageMGString + '</p>' + 
								'<p class="description">bei ' + kg + ' kg</p>' +
								'<p class="units">&nbsp;[mg]</p>' +
								'<p class ="values">' + cisatracuriumDosageMG + '</p>' +
								'<p class="description">bei 1 mg/ml</p>' +					
								'<p class="units">&nbsp;[ml]</p>' +
								'<p class ="values">' + cisatracuriumDosageML + '</p>',									
			                    items: [{
			                        docked: 'top',
			                        xtype: 'toolbar',
			                        title: 'Cisatracurium'
			                    }]
			                });
			               this.popup.show('pop');
			});	
		//end if cisatracuriumTooYoungWarning
		}
		if (atracuriumTooYoungWarning == false) 
		{
			Ext.select('div.atracurium').on('click', function(){
			                this.popup = new Ext.Panel({
			                    floating: true,
			                    modal: true,
			                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
			                    styleHtmlContent: true,
			                    scrollable: 'vertical',
			                    html: '<p class="description">Ampulleninhalt</p>' +
								'<p class ="values">25 mg / 2.5 ml</p>' +
								'<p class="description"></p>' +
								'<p class ="values">50 mg / 5 ml</p>' +
								'<p class="description">Verd&uuml;nnung</p>' +
								'<p class ="values">' + atracuriumSolution + '</p>' +
								'<p class="description">Konzentration</p>' +
								'<p class ="values">' + atracuriumConcentration + '</p>' +					
								'<p class="description">Dosierung</p>' +
								'<p class ="values">' + atracuriumDosageMGString + '</p>' + 
								'<p class="description">bei ' + kg + ' kg</p>' +
								'<p class="units">&nbsp;[mg]</p>' +
								'<p class ="values">' + atracuriumDosageMG + '</p>' +
								'<p class="description">' + atracuriumConcentration + '</p>' +					
								'<p class="units">&nbsp;[ml]</p>' +
								'<p class ="values">' + atracuriumDosageML + '</p>',									
			                    items: [{
			                        docked: 'top',
			                        xtype: 'toolbar',
			                        title: 'Atracurium'
			                    }]
			                });
			               this.popup.show('pop');
			});	
		//end if atracuriumTooYoungWarning
		}
		
		Ext.select('div.pancuronium').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">4 mg / 2 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">auf 20 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">0.2 mg/ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + pancuroniumDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + pancuroniumDosageMG + '</p>' +
							'<p class="description">bei 0.2 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + pancuroniumDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Pancuronium'
		                    }]
		                });
		               this.popup.show('pop');
		});	


		Ext.select('div.pyridostigmin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">5 mg / 1 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">1 ml + 4 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">1 mg/ml</p>' +							
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + pyridostigminDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + pyridostigminDosageMG + '</p>' +
							'<p class="description">bei 1 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + pyridostigminDosageML + '</p>' +
							'<p class="footnote">+ 10-20 <span style="font-family:opensans;">&micro;</span>g/kg KG Atropin </p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Pyridostigmin'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.naloxon').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">400 <span style="font-family:opensans;">&micro;</span>g / 1 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">auf 20 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">20 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +			
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + naloxonDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
							'<p class ="values">' + naloxonDosageMG + '</p>' +
							'<p class="description">bei 20 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + naloxonDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Naloxon'
		                    }]
		                });
		               this.popup.show('pop');
		});	
		Ext.select('div.flumazenil').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">500 <span style="font-family:opensans;">&micro;</span>g / 5 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">pur</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">100 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +	
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + flumazenilDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
							'<p class ="values">' + flumazenilDosageMG + '</p>' +
							'<p class="description">bei 100 <span style="font-family:opensans;">&micro;</span>g / 1 ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + flumazenilDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Flumazenil'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.neostigmin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">0.5 mg / 1 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">pur</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">0.5 mg/ml</p>' +					
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + neostigminDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[mg]</p>' +
							'<p class ="values">' + neostigminDosageMG + '</p>' +
							'<p class="description">bei 0.5 mg/ml</p>' +					
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + neostigminDosageML + '</p>'+
							'<p class="footnote">+ 10-20 <span style="font-family:opensans;">&micro;</span>g/kg KG Atropin </p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Neostigmin'
		                    }]
		                });
		               this.popup.show('pop');
		});	
		Ext.select('div.physostigmin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">2 mg / 5 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">auf 20 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">100 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +				
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + physostigminDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
							'<p class ="values">' + physostigminDosageMG + '</p>' +
							'<p class="description">bei 100 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + physostigminDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Physostigmin'
		                    }]
		                });
		               this.popup.show('pop');
		});	

		if (dexamethasonTooYoungWarning == false) 
		{	
			Ext.select('div.dexamethason').on('click', function(){
			                this.popup = new Ext.Panel({
			                    floating: true,
			                    modal: true,
			                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
			                    styleHtmlContent: true,
			                    scrollable: 'vertical',
			                    html: '<p class="description">Ampulleninhalt</p>' +
								'<p class ="values">4 mg / 1 ml</p>' +
								'<p class="description">Verd&uuml;nnung</p>' +
								'<p class ="values">1 ml + 3 ml SF</p>' +
								'<p class="description">Konzentration</p>' +
								'<p class ="values">1 mg/ml</p>' +
								'<p class="description">Dosierung *</p>' +
								'<p class ="values">' + dexamethasonDosageMGString + '</p>' + 
								'<p class="description">bei ' + kg + ' kg</p>' +
								'<p class="units">&nbsp;[mg]</p>' +
								'<p class ="values">' + dexamethasonDosageMG + '</p>' +
								'<p class="description">bei 1 mg/ml</p>' +					
								'<p class="units">&nbsp;[ml]</p>' +
								'<p class ="values">' + dexamethasonDosageML + '</p>' +
								'<p class="footnote">* max 4 mg / alle 6h</p>',									
			                    items: [{
			                        docked: 'top',
			                        xtype: 'toolbar',
			                        title: 'Dexamethason'
			                    }]
			                });
			               this.popup.show('pop');
			});
		//end if dexamethasonTooYoungWarning
		}	
		if (granisetronTooYoungWarning == false) 
		{	
			Ext.select('div.granisetron').on('click', function(){
			                this.popup = new Ext.Panel({
			                    floating: true,
			                    modal: true,
			                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
			                    styleHtmlContent: true,
			                    scrollable: 'vertical',
			                    html: '<p class="description">Ampulleninhalt</p>' +
								'<p class ="values">1 mg / 1 ml</p>' +
								'<p class="description">Verd&uuml;nnung</p>' +
								'<p class ="values">1 ml + 49 ml SF</p>' +
								'<p class="description">Konzentration</p>' +
								'<p class ="values">0.02 mg/ml</p>' +							
								'<p class="description">Dosierung *</p>' +
								'<p class ="values">' + granisetronDosageMGString + '</p>' + 
								'<p class="description">bei ' + kg + ' kg</p>' +
								'<p class="units">&nbsp;[mg]</p>' +
								'<p class ="values">' + granisetronDosageMG + '</p>' +
								'<p class="description">bei 0.02 mg/ml</p>' +					
								'<p class="units">&nbsp;[ml]</p>' +
								'<p class ="values">' + granisetronDosageML + '</p>' +
								'<p class="footnote">* max 1 mg als KI / alle 6h</p>',									
			                    items: [{
			                        docked: 'top',
			                        xtype: 'toolbar',
			                        title: 'Granisetron'
			                    }]
			                });
			               this.popup.show('pop');
			});
		//end if granisetronTooYoungWarning
		}		
		if (dimenhydrinatTooYoungWarning == false) 
		{	
			Ext.select('div.dimenhydrinat').on('click', function(){
			                this.popup = new Ext.Panel({
			                    floating: true,
			                    modal: true,
			                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
			                    styleHtmlContent: true,
			                    scrollable: 'vertical',
			                    html: '<p class="description">Ampulleninhalt</p>' +
								'<p class ="values">62 mg / 10 ml</p>' +
								'<p class="description">Verd&uuml;nnung</p>' +
								'<p class ="values">pur</p>' +
								'<p class="description">Konzentration</p>' +
								'<p class ="values">6.2 mg/ml</p>' +							
								'<p class="description">Dosierung *</p>' +
								'<p class ="values">' + dimenhydrinatDosageMGString + '</p>' + 
								'<p class="description">bei ' + kg + ' kg</p>' +
								'<p class="units">&nbsp;[mg]</p>' +
								'<p class ="values">' + dimenhydrinatDosageMG + '</p>' +
								'<p class="description">bei 0.16 mg/ml</p>' +					
								'<p class="units">&nbsp;[ml]</p>' +
								'<p class ="values">' + dimenhydrinatDosageML + '</p>' +
								'<p class="footnote">* max 1,25 mg/kg KG (' + dimenhydrinatMaxDosageMG + ' mg) / alle 8h</p>',									
			                    items: [{
			                        docked: 'top',
			                        xtype: 'toolbar',
			                        title: 'Dimenhydrinat'
			                    }]
			                });
			               this.popup.show('pop');
			});
		//end if dimenhydrinatTooYoungWarning
		}
		if (propofolTooYoungWarning == false) 
		{	
			Ext.select('div.propofolPov').on('click', function(){
			                this.popup = new Ext.Panel({
			                    floating: true,
			                    modal: true,
			                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
			                    styleHtmlContent: true,
			                    scrollable: 'vertical',
			                    html: '<p class="description">Ampulleninhalt</p>' +
								'<p class ="values">' + propofolInductionVialContent + '</p>' +
								'<p class="description">Verd&uuml;nnung</p>' +
								'<p class ="values">pur</p>' +
								'<p class="description">Konzentration</p>' +
								'<p class ="values">' + propofolInductionConcentration + '</p>' +			
								'<p class="description">Dosierung *</p>' +
								'<p class ="values">0.5 - 1 mg/kg KG</p>' + 
								'<p class="description">bei ' + kg + ' kg</p>' +
								'<p class="units">&nbsp;[mg]</p>' +
								'<p class ="values">' + propofolPovDosageMG + '</p>' +
								'<p class="description">bei ' + propofolInductionConcentration + '</p>' +					
								'<p class="units">&nbsp;[ml]</p>' +
								'<p class ="values">' + propofolPovDosageML + '</p>' +
								'<p class="footnote">* 3rd line, langsam unter Monitoring</p>',									
			                    items: [{
			                        docked: 'top',
			                        xtype: 'toolbar',
			                        title: 'Propofol ' + propofolInductionPercentConcentration,
			                    }]
			                });
			               this.popup.show('pop');
			});
		//end if propofolTooYoungWarning
		}
			if (ondansetronTooYoungWarning == false) 
			{	
				Ext.select('div.ondansetron').on('click', function(){
				                this.popup = new Ext.Panel({
				                    floating: true,
				                    modal: true,
				                    centered: true,
								width: Ext.is.Phone ? 300 : 600,
								height: Ext.is.Phone ? 300 : 600,
				                    styleHtmlContent: true,
				                    scrollable: 'vertical',
				                    html: '<p class="description">Ampulleninhalt</p>' +
									'<p class ="values">4 mg / 2 ml</p>' +
									'<p class="description">Verd&uuml;nnung</p>' +
									'<p class ="values">auf 4 ml SF</p>' +
									'<p class="description">Konzentration</p>' +
									'<p class ="values">1 mg/ml</p>' +					
									'<p class="description">Dosierung *</p>' +
									'<p class ="values">' + ondansetronDosageMGString + '</p>' + 
									'<p class="description">bei ' + kg + ' kg</p>' +
									'<p class="units">&nbsp;[mg]</p>' +
									'<p class ="values">' + ondansetronDosageMG + '</p>' +
									'<p class="description">bei 1 mg/ml</p>' +					
									'<p class="units">&nbsp;[ml]</p>' +
									'<p class ="values">' + ondansetronDosageML + '</p>' +
									'<p class="footnote">* max 4 mg alle 6h</p>',									
				                    items: [{
				                        docked: 'top',
				                        xtype: 'toolbar',
				                        title: 'Ondansetron'
				                    }]
				                });
				               this.popup.show('pop');
				});
			//end if granisetronTooYoungWarning
			}	
		
		Ext.select('div.povoc').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="title">Risikofaktoren</p>' +
							'<p class="description">OP-Dauer &gt; 30 min</p>' +
							'<p class ="values">1 Punkt</p>' +
							'<p class="description">Alter &gt; 3 Jahre</p>' +
							'<p class ="values">1 Punkt</p>' +
							'<p class="description">Strabismus/AT/TE</p>' +
							'<p class ="values">1 Punkt</p>' + 
							'<p class="description">Anamnese *</p>' +
							'<p class="values">1 Punkt</p>' +
							'<p class="footnote">* (PONV / Kinetose bei Kind oder Verwandten 1. Grades (Eltern,Geschwistern))</p>'  +
							'<p class ="title">POV-Inzidenz</p>' +
							'<p class="description">0 Punkte</p>' +
							'<p class="values">9 %</p>' +							
							'<p class="description">1 Punkte</p>' +	
							'<p class="values">10 %</p>' +	
							'<p class="description">2 Punkte</p>' +	
							'<p class="values">30 %</p>' +	
							'<p class="description">3 Punkte</p>' +
							'<p class="values">55 %</p>' +		
							'<p class="description">4 Punkte</p>' +																											
							'<p class ="values">70 %</p>' + 
							'<p class="title">Prophylaxe</p>' +
							'<p class="descriptionbold">0-1 Punkte</p>' +
							'<p class ="values">"wait and see"</p>' +
							'<p class="descriptionbold">0-1 Punkte + TE</p>' +
							'<p class ="values">TIVA + Dexa</p>' +
							'<p class="descriptionbold">2-3 Punkte</p>' +
							'<p class ="values">TIVA + Dexa</p>' +
							'<p class="descriptionbold">4 Punkte</p>' +
							'<p class="descriptionbold"></p>' +
							'<p class ="values">TIVA + Dexa + Dimenhydrinat</p>' + 
							'<p class="descriptionbold">4 Punkte + TE</p>' +
							'<p class="descriptionbold"></p>' +
							'<p class="values">TIVA + Dexa + Setron</p>' +
							'<p class="footnote" style="text-align:left;">Quellen: </p>' + 
							'<p class="footnote" style="text-align:left;">Handlungsempfehlung zur Risikoeinsch&auml;tzung, Prophylaxe und Therapie von postoperativem Erbrechen im Kindesalter<br />' +
							'vom Wissenschaftlichen Arbeitskreis Kinderan&auml;sthesie der DGAI<br />' +
							'An&auml;sth Intensivmed 2007;48:S95-S98</p>' +
							'<p class="footnote" style="text-align:left;">Guidelines on the Prevention of Postoperative Vomiting in Children<br />' +
							'of The Association of Paediatric Anaesthetists of Great Britain &amp; Ireland<br />' +
							'http://www.apagbi.org.uk/</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'POVOC-Score'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.atropin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">0.5 mg / 1 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">1 ml + 4 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">100 <span style="font-family:opensans;">&micro;</span>g/ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + atropinDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
							'<p class ="values">' + atropinDosageMG + '</p>' +
							'<p class="description">bei 100 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + atropinDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Atropin'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.epinephrin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">1 mg / 1 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">1 ml + 9 ml SF</p>' +
							'<p class="description"></p>' +
							'<p class ="values">davon 1 ml in 1ml Spritze</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">100 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + epinephrinDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g]</p>' +
							'<p class ="values">' + epinephrinDosageMG + '</p>' +
							'<p class="description">bei 100 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
							'<p class="units">&nbsp;[ml]</p>' +
							'<p class ="values">' + epinephrinDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Epinephrin'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.noradrenalin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">1 mg / 1 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">3 mg auf 50 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">60 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + noradrenalinDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g/min]</p>' +
							'<p class ="values">' + noradrenalinDosageMG + '</p>' +
							'<p class="description">bei 60 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
							'<p class="units">&nbsp;[ml/h]</p>' +
							'<p class ="values">' + noradrenalinDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Noradrenalin'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.dopamin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">50 mg / 5 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">3 ml auf 50 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">600 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + dopaminDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g/min]</p>' +
							'<p class ="values">' + dopaminDosageMG + '</p>' +
							'<p class="description">bei 600 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
							'<p class="units">&nbsp;[ml/h]</p>' +
							'<p class ="values">' + dopaminDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Dopamin'
		                    }]
		                });
		               this.popup.show('pop');
		});
		Ext.select('div.dobutamin').on('click', function(){
		                this.popup = new Ext.Panel({
		                    floating: true,
		                    modal: true,
		                    centered: true,
							width: Ext.is.Phone ? 300 : 600,
							height: Ext.is.Phone ? 300 : 600,
		                    styleHtmlContent: true,
		                    scrollable: 'vertical',
		                    html: '<p class="description">Ampulleninhalt</p>' +
							'<p class ="values">250 mg / 50 ml</p>' +
							'<p class="description">Verd&uuml;nnung</p>' +
							'<p class ="values">6 ml auf 50 ml SF</p>' +
							'<p class="description">Konzentration</p>' +
							'<p class ="values">600 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
							'<p class="description">Dosierung</p>' +
							'<p class ="values">' + dobutaminDosageMGString + '</p>' + 
							'<p class="description">bei ' + kg + ' kg</p>' +
							'<p class="units">&nbsp;[<span style="font-family:opensans;">&micro;</span>g/min]</p>' +
							'<p class ="values">' + dobutaminDosageMG + '</p>' +
							'<p class="description">bei 600 <span style="font-family:opensans;">&micro;</span>g / ml</p>' +
							'<p class="units">&nbsp;[ml/h]</p>' +
							'<p class ="values">' + dobutaminDosageML + '</p>',									
		                    items: [{
		                        docked: 'top',
		                        xtype: 'toolbar',
		                        title: 'Dobutamin'
		                    }]
		                });
		               this.popup.show('pop');
		});

    // end weightAgePicker.on hide
    });
// end onReady after this
	}
});