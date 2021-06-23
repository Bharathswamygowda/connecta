$(function(){
var dtToday = new Date();

var month = dtToday.getMonth() + 1;
var day = dtToday.getDate();
var year = dtToday.getFullYear();
if(month < 10)
month = '0' + month.toString();
if(day < 10)
day = '0' + day.toString();

var minDate= year + '-' + month + '-' + day;

$('input[type=date]').attr('min', minDate);
});





var tfConfig = {
base_path: 'tablefilter/',
alternate_rows: true,
btn_reset: true,
responsive: true,
rows_counter: true,
loader: true,
status_bar: true,
mark_active_columns: {
highlight_column: true
},
highlight_keywords: true,
no_results_message: true,
col_0: 'none',
col_1: 'none',
col_2: 'none',
col_3: 'none',
col_4: 'none',
col_5: 'select',
col_6: 'select',
col_7: 'none',
col_8: 'select',
col_9: 'select',
col_10: 'select',
col_11: 'select',
col_12: 'select',
col_13: 'select',
col_14: 'select',
col_15: 'none',







extensions: [{
name: 'sort'
}],

/** Bootstrap integration */

// aligns filter at cell bottom when Bootstrap is enabled
filters_cell_tag: 'th',

// allows Bootstrap table styling
themes: [{
name: 'transparent'
}]
};

var tf = new TableFilter(document.querySelector('.table'), tfConfig);
tf.init();


