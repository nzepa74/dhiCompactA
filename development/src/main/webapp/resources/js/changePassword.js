/**
 * Created by jigme.dorji on 24-Apr-2020.
 */
changePassword = (function () {

    "use strict";
    var form = $('#changePasswordForm');
    var isSubmitted = false;


    /**
     * save.
     */
    function save() {

        $('#btnSave').on('click', function () {
            $.validator.setDefaults({
                submitHandler: function () {
                    var url = 'changePassword/save';
                    var data = $(form).serializeArray();

                    isSubmitted = true;
                    $('#btnSave').attr('disabled', true);

                    $.ajax({
                        url: url,
                        type: 'post',
                        data: data,
                        processData: true,
                        success: function (res) {
                            if (res.status == 0) {
                                swal({
                                    title: res.text,
                                    text: "Click OK to exit",
                                    type: "error"
                                });
                                $('#oldPassword').val('');
                                $('#confirmPassword').val('');
                                $('#newPassword').val('');
                            } else if (res.status == 1) {
                                swal({
                                    title: res.text,
                                    text: "Click OK to exit",
                                    type: "success"
                                }, function (e) {
                                    window.location.reload();
                                });
                                $('#oldPassword').val('');
                                $('#confirmPassword').val('');
                                $('#newPassword').val('');
                            }
                        }
                    });
                }
            });

            form.validate({
                rules: {
                    oldPassword: {
                        required: true
                    },
                    newPassword: {
                        required: true
                    },
                    confirmPassword: {
                        required: true
                    }
                },
                messages: {
                    oldPassword: {
                        required: "This field is required"
                    },
                    newPassword: {
                        required: "This field is required"
                    },
                    confirmPassword: {
                        required: "This field is required"
                    }
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.col-md-4').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });
    }


    //To validate that the password entered is same
    $('#confirmPassword').on('blur', function () {
        var password = $(this).val();
        var confirmPassword = $('#newPassword').val();

        if (password != confirmPassword) {
            swal({
                title: "Your password doesn't match, Please type again",
                text: "Click OK to exit",
                type: "warning"
            });
            $('#confirmPassword').val('');
        }
    })


    return {
        save: save
    }
})();

$(document).ready(function () {
    changePassword.save();
});






