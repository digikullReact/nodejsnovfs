// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'arya_dtr',
  password:"1234"
});

const FIELDS=[
	{
		"Field" : "dtr_audit_id",
    "alias":"dtr_audit_id",
		"Type" : "int",
		"Null" : "NO",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},

	{
		"Field" : "quality_assessment_date",
    "alias" : "quality_assessment_date",
		"Type" : "varchar(255)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	
	
	
	{
		"Field" : "fumigation_date",
    "alias" : "fumigation_date",
		"Type" : "varchar(255)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "spray_date",
    "alias" : "spray_date",
		"Type" : "varchar(255)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "cleanliness_date",
    "alias" : "cleaniness_date",
		"Type" : "varchar(255)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},

	{
		"Field" : "foreign_matter",
    "alias" : "FM",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "live_insect",
    "alias":"Live Insect",
		"Type" : "tinyint",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "other_edible_grain",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "admixture",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "immature",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "broken",

		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "shriveled",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "discoloured",
    "alias":",Luster Loss and Discolour",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "damage",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "weevilled",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "insects_damage_kernels_or_weevilled_grains",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "green_seed",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "infestation",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "other_food_grain",
    "alias" : "OFG",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "water_damage",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "undevelop",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "broken_shriveled_and_immature",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "split_and_broken",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "fungus",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "immature_and_shriveled",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "insects_damage_kernels",
    "alias":"IDK",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "length",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "chalky",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "damaged_and_discoloured",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "oil_content",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "defective_rhizomes",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "hectoliter_weight",
    "alias" : "HLW",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "black_tip",
    "alias":"BT",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "karnal_bunt",
     "alias":"KB",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "potiya",
    "alias":"Potiya",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "small_mud_ball",
    "alias":"SMB",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "khapra",
		"Type" : "tinyint",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "red_grain",
     "alias":"Red Grain", 
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "broken_shriveled",
    "alias":"Broken and Shrivilled",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "acid_soluble_ash_max",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "extraneous_matter",
		"Type" : "decimal(4,2)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "source",
		"Type" : "varchar(50)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "updated_source",
		"Type" : "varchar(50)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "user_agent",
		"Type" : "varchar(255)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "last_updated_by",
		"Type" : "int",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	},
	{
		"Field" : "created_at",
		"Type" : "timestamp",
		"Null" : "NO",
		"Key" : "",
		"Default" : "CURRENT_TIMESTAMP",
		"Extra" : "DEFAULT_GENERATED"
	},
	{
		"Field" : "updated_at",
		"Type" : "datetime",
		"Null" : "YES",
		"Key" : "",
		"Default" : "CURRENT_TIMESTAMP",
		"Extra" : "DEFAULT_GENERATED on update CURRENT_TIMESTAMP"
	},
	{
		"Field" : "moisture",
     "alias":"Moisture", 
		"Type" : "varchar(45)",
		"Null" : "YES",
		"Key" : "",
		"Default" : null,
		"Extra" : ""
	}
]


// simple query
connection.query(
  'SELECT cd.id as chrId,remark,cd.field_name,cd.field_value,cd.spray_date,cd.cleaniness_date, cd.fumigation_date,da.id as dtr_audit_id FROM chr_detail cd INNER JOIN chr ON cd.chr_id=chr.id INNER JOIN dtr_audit da on chr.warehouse_id=da.warehouse_id and chr.maker_id=da.maker_id',
  function(err, results, fields) {
   // console.log(results); 
    const finalObj=[]
    results.forEach(ele=>{
		const obj={};
        if(ele.field_name){

      
    const fieldsName=ele.field_name.split(",");
    const fieldsValue=ele.field_value.split(",");
   
    fieldsName.forEach((e,i)=>{
       // console.log(e);
        const aliasName=FIELDS.find(ele=>ele.alias==e);
        //console.log(aliasName["Field"]);
        if(aliasName){
            obj[aliasName.Field]=fieldsValue[i];

        }
       

    })
}
    obj["spray_date"]=ele.spray_date;
	obj["chrId"]=ele.chrId
    obj["fumigation_date"]=ele.fumigation_date;
    obj["dtr_audit_id"]=ele.dtr_audit_id;
    obj["cleanliness_date"]=ele.cleaniness_date
	obj["remark"]=ele.remark;

    finalObj.push(obj);


    })

    console.log(finalObj.filter(ele=>ele.chrId==4409));
   
  }
);