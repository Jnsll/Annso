


function Sample(json)
{
    this.id = json["id"];
    this.name = json["name"];
    this.comments = json["comments"];
    this.nickname = json["nickname"];
    this.file_id = json["file_id"];
    this.file_name = json["filename"];
    this.file_import_date = json["import_date"];
    this.is_mosaic = json["is_mosaic"];
}



function Analysis(json)
{
    // Data
    this.id = json["id"];
    this.name = json["name"];
    this.samples = {};
    this.fields = [];
    this.filter = [];
    this.filters = json["filters"];
    this.creation_date = json["creation_date"];
    this.update_date = json["update_date"];
    this.attributes = json["attributes"];
    this.template_id = json["template_id"];
    this.template_name = json["template_name"];
    this.ref = json["reference_id"];
    // samples
    var samples = {};
    json["samples"].forEach(function(sp) {
        samples[sp["id"]] = new Sample(sp);
    });
    this.samples = samples;

    // settings
    settings = json["settings"]
    if (!('order' in settings)) { settings["order"] = []; }
    this.filter_mode = "table";
    this.fields = settings["fields"];
    this.filter = settings["filter"];
    this.selection = settings["selection"];
    this.order = settings["order"];
    this.current_count = 0;
    this.current_total = 0;

    if (this.selection == undefined)
    {
        this.selection = [];
    }
    
}


