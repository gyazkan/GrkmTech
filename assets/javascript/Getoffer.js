// $(function(){
//   $('select').niceSelect();
// })




var Brand =
    [
        {
            ID: '1',
            Name: 'Haier'
        },
        {
            ID: '2',
            Name: 'DRCTech'
        }
    ];

var categories =
    [
        {
            ID: '1',
            Name: 'Duvar Tipi',
            BrandId: '1'
        },
        {
            ID: '2',
            Name: 'Hafif Ticari',
            BrandId: '1'

        },
        {
            ID: '3',
            Name: 'VRF',
            BrandId: '1'

        },
        {
            ID: '4',
            Name: 'Atom VRF',
            BrandId: '2'
        },
    ];
var BTU =
    [
        //Duvar Tipi Alaný
        {
            ID: '1',
            Name: '9000',
            CategoryId: '1',
        },
        {
            ID: '2',
            Name: '12.000',
            CategoryId: '1',
        },
        {
            ID: '3',
            Name: '18.000',
            CategoryId: '1',
        },

        {
            ID: '4',
            Name: '24.000',
            CategoryId: '1',
        },
        //Duvar Tipi Alaný



        //Hafif Ticari Alaný
        {
            ID: '5',
            Name: '24.000 Salon',
            CategoryId: '2',
        },
        {
            ID: '6',
            Name: '48.000 Salon',
            CategoryId: '2',
        },
        {
            ID: '7',
            Name: '24.000 Kaset',
            CategoryId: '2',
        },
        {
            ID: '8',
            Name: '48.000 Kaset',
            CategoryId: '2',
        },
        {
            ID: '9',
            Name: '60.000 Kanallı',
            CategoryId: '2',
        },
        //Hafif Ticari Alaný




        //VRF Alný
        {
            ID: '10',
            Name: '28.000',
            CategoryId: '3',
        },
        {
            ID: '11',
            Name: '320.000',
            CategoryId: '3',
        },
        //VRF Alný


        //Atom VRF Alaný
        {
            ID: '12',
            Name: '28.000',
            CategoryId: '4',
        },
        {
            ID: '13',
            Name: '56.000',
            CategoryId: '4',
        },
        //Atom VRF Alaný
    ];
$(document).ready(function () {
    $("#brandSelect").on("change", function () {
        GetCategories($(this).val());
    });
    $("#categorySelect").on("change", function () {
        GetBTU($(this).val());
    })
    function GetCategories(brandId) {
        var categoryList = categories.filter(function (category) {
            return category.BrandId == brandId;
        });
        $("#categorySelect option:not(:eq(0))").remove();
        $("#selectBtu option:not(:eq(0))").remove();
        $("#selectAmount").val("0");
        categoryList.forEach(function (data) {
            $("#categorySelect option:first-child").after(`<option value="${data.ID}">${data.Name}</option>`);

        });
    }
    function GetBTU(catId) {
        var btuList = BTU.filter(function (bt) {
            return bt.CategoryId == catId;
        });
        $("#selectBtu option:not(:eq(0))").remove();
        btuList.forEach(function (data) {
            $("#selectBtu option:first-child").after(`<option value="${data.ID}">${data.Name}</option>`);
        })
    }


});

function AddRow() {
    if ($("#brandSelect option:selected").val() != 0 && $("#categorySelect option:selected").val() != 0 && $("#selectBtu option:selected").val() != 0 && $("#selectAmount option:selected").val() != 0) {

        $("#filterError").addClass("Error-area");
        $("#filterError").removeClass("d-block");

        var table = $("#offerTable tbody");
        var brand = $("#brandSelect option:selected").text();
        var category = $("#categorySelect option:selected").text();
        var btu = $("#selectBtu option:selected").text();
        var amount = $("#selectAmount option:selected").text();

        table.append(`<tr> <td>${brand}</td> <td>${category}</td> <td>${btu}</td> <td>${amount}</td> <td class="getoffer-delete-button"> <a class="getoffer-table-delete-button" href="#">x</a> </td> </tr>`)
    }
    else {
        $("#filterError").addClass("d-block");
        $("#filterError").removeClass("Error-area");
    }
}

$(document).on("click", ".getoffer-table-delete-button", function () {
    $(this).parents("tr").remove();
})


// $(document).ready(function () {
//     $("#contactPhone").val("+90");
//     $("#contactPhone").mask("+00 000 000 0000");
// });