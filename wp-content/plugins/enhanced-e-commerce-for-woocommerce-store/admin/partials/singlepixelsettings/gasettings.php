<?php
$is_sel_disable = 'disabled';
$cust_g_email = (isset($tvc_data['g_mail']) === TRUE && esc_attr($subscriptionId) !== '') ? esc_attr($tvc_data['g_mail']) : "";
$stepTogal = $cust_g_email != '' ? 'active' : 'not-active';
?>


<div class="convcard gasettings p-4 mt-0 rounded-3 shadow-sm">

    <?php if (isset($pixel_settings_arr[$subpage]['topnoti']) === TRUE && $pixel_settings_arr[$subpage]['topnoti'] !== "") { ?>
        <div class="alert d-flex align-items-cente p-0" role="alert">
            <span class="p-2 material-symbols-outlined text-light conv-error-bg rounded-start">info</span>
            <div class="p-2 w-100 rounded-end border border-start-0 shadow-sm conv-notification-alert lh-base">
                <?php esc_html_e($pixel_settings_arr[$subpage]['topnoti'], "enhanced-e-commerce-for-woocommerce-store"); ?>
            </div>
        </div>
    <?php } ?>
    <ul class="progress-steps">
        <li class="<?php echo $stepTogal ?>">
            <div class="step-box">
                <?php
                $connect_url = $TVC_Admin_Helper->get_custom_connect_url_subpage(admin_url() . 'admin.php?page=conversios-google-analytics', "gasettings");
                require_once "ga-googlesignin.php";
                ?>
            </div>
        </li>
        <li class="disable <?php echo $stepTogal ?> second-step">
            <div class="step-box">
                <form id="gasettings_form" class="convpixsetting-inner-box mt-4">
                    <h5 class="fw-normal mb-1">
                        <?php esc_html_e("Select Google Analytics Id:", "enhanced-e-commerce-for-woocommerce-store"); ?>
                    </h5>
                    <?php
                    $tracking_option = (isset($ee_options['tracking_option']) === TRUE && $ee_options['tracking_option'] !== "") ? $ee_options['tracking_option'] : "";
                    ?>
                    <div>
                        <!-- Google Analytics 4 -->
                        <?php
                        $ga4_analytic_account_id = (isset($googleDetail->ga4_analytic_account_id) === TRUE && $googleDetail->ga4_analytic_account_id !== "") ? $googleDetail->ga4_analytic_account_id : "";
                        $measurement_id = (isset($googleDetail->measurement_id) === TRUE && $googleDetail->measurement_id !== "") ? $googleDetail->measurement_id : "";
                        ?>
                        <div id="analytics_box_GA4" class="py-1">
                            <input type="radio" <?php echo esc_attr(($tracking_option === "GA4") ? 'checked="checked"' : ''); ?> name="tracking_option" id="tracking_option_ga4" value="GA4">
                            <label class="form-check-label ps-2" for="tracking_option_ga4">
                                <?php esc_html_e("Google Analytics 4", "enhanced-e-commerce-for-woocommerce-store"); ?>
                            </label>
                            <label class="fw-bold-500 ps-2 text-success">
                                <?php esc_html_e("Recommended", "enhanced-e-commerce-for-woocommerce-store"); ?>
                            </label>
                            <div class="row pt-2 conv-hideme-gasettings <?php echo ($tracking_option === 'GA4') ? '' : 'd-none'; ?>">
                                <div class="col-5">
                                    <select id="ga4_analytic_account_id" name="ga4_analytic_account_id" acctype="GA4" class="form-select form-select-lg mb-3 selecttwo ga_analytic_account_id ga_analytic_account_id_ga4" style="width: 100%" <?php echo esc_attr($is_sel_disable); ?>>
                                        <?php if (!empty($ga4_analytic_account_id)) { ?>
                                            <option selected><?php echo esc_attr($ga4_analytic_account_id); ?></option>
                                        <?php } ?>
                                        <option value="">Select GA4 Account ID</option>
                                    </select>
                                </div>
                                <div class="col-5">
                                    <select id="ga4_property_id" name="measurement_id" class="form-select form-select-lg mb-3 selecttwo" style="width: 100%" <?php echo esc_attr($is_sel_disable); ?>>
                                        <option value="">Select Measurement ID</option>
                                        <?php if (!empty($measurement_id)) { ?>
                                            <option selected><?php echo esc_attr($measurement_id); ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <div class="col-2 d-flex justify-content-start">
                                    <button type="button" class="btn btn-sm d-flex conv-enable-selection conv-link-blue justify-content-start">
                                        <span class="material-symbols-outlined md-18">edit</span>
                                        <span class="px-1">Edit</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <!-- Google Analytics 4 End -->

                        <!-- Google Analytics 3 -->
                        <?php
                        $ua_analytic_account_id = (isset($googleDetail->ua_analytic_account_id) === TRUE && $googleDetail->ua_analytic_account_id !== "") ? $googleDetail->ua_analytic_account_id : "";
                        $property_id = (isset($googleDetail->property_id) === TRUE && $googleDetail->property_id !== "") ? $googleDetail->property_id : "";
                        ?>
                        <div id="analytics_box_UA" class="py-1">
                            <input type="radio" <?php echo esc_attr(($tracking_option === "UA") ? 'checked="checked"' : ''); ?> name="tracking_option" id="tracking_option_ua" value="UA">
                            <label class="form-check-label ps-2" for="tracking_option_ua">
                                <?php esc_html_e("Universal Analytics (Google Analytics 3)", "enhanced-e-commerce-for-woocommerce-store"); ?>
                                <span class="text-danger">Will be discontinued after 01-07-2023</span>
                            </label>
                            <div class="row pt-2 conv-hideme-gasettings <?php echo ($tracking_option === 'UA') ? '' : 'd-none'; ?>">
                                <div class="col-5">
                                    <select id="ga3_analytic_account_id" name="ua_analytic_account_id" acctype="UA" class="form-select form-select-lg mb-3 selecttwo ga_analytic_account_id ga_analytic_account_id_ua" style="width: 100%" <?php echo esc_attr($is_sel_disable); ?>>
                                        <?php if (!empty($ua_analytic_account_id)) { ?>
                                            <option value="<?php echo esc_attr($ua_analytic_account_id); ?>" selected><?php echo esc_attr($ua_analytic_account_id); ?></option>
                                        <?php } ?>
                                        <option value="">Select UA Account ID</option>
                                    </select>
                                </div>
                                <div class="col-5">
                                    <select id="ga3_property_id" name="property_id" class="form-select form-select-lg mb-3 selecttwo" style="width: 100%" <?php echo esc_attr($is_sel_disable); ?>>
                                        <option value="">Select Property ID</option>
                                        <?php if (!empty($property_id)) { ?>
                                            <option selected><?php echo esc_attr($property_id); ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <div class="col-2 d-flex justify-content-start">
                                    <button type="button" class="btn btn-sm d-flex conv-enable-selection conv-link-blue justify-content-start">
                                        <span class="material-symbols-outlined md-18">edit</span>
                                        <span class="px-1">Edit</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <!-- Google Analytics 3 End-->



                        <!-- Google Analytics Both -->
                        <div id="analytics_box_BOTH" class="py-1">
                            <input type="radio" <?php echo esc_attr(($tracking_option === "BOTH") ? 'checked="checked"' : ''); ?> name="tracking_option" id="tracking_option_both" value="BOTH">
                            <label class="form-check-label ps-2" for="tracking_option_both">
                                <?php esc_html_e("Both", "enhanced-e-commerce-for-woocommerce-store"); ?>
                            </label>
                            <div class="row pt-2 conv-hideme-gasettings <?php echo ($tracking_option === 'BOTH') ? '' : 'd-none'; ?>">
                                <div class="col-10 row">
                                    <div class="col-6">
                                        <select id="both_ga3_analytic_account_id" name="ua_analytic_account_id" acctype="UA" class="form-select form-select-lg mb-3 selecttwo ga_analytic_account_id ga_analytic_account_id_ua" style="width: 100%" <?php echo esc_attr($is_sel_disable); ?>>
                                            <?php if (!empty($ua_analytic_account_id)) { ?>
                                                <option selected><?php echo esc_attr($ua_analytic_account_id); ?></option>
                                            <?php } ?>
                                            <option value="">Select UA Account ID</option>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <select id="both_ga3_property_id" name="property_id" class="form-select form-select-lg mb-3 selecttwo" style="width: 100%" <?php echo esc_attr($is_sel_disable); ?>>
                                            <option value="">Select Property ID</option>
                                            <?php if (!empty($property_id)) { ?>
                                                <option selected><?php echo esc_attr($property_id); ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>

                                    <div class="col-6 pt-2">
                                        <select id="both_ga4_analytic_account_id" name="ga4_analytic_account_id" acctype="GA4" class="form-select form-select-lg mb-3 selecttwo ga_analytic_account_id ga_analytic_account_id_ga4" style="width: 100%" <?php echo esc_attr($is_sel_disable); ?>>
                                            <?php if (!empty($ga4_analytic_account_id)) { ?>
                                                <option selected><?php echo esc_attr($ga4_analytic_account_id); ?></option>
                                            <?php } ?>
                                            <option value="">Select GA4 Account ID</option>
                                        </select>
                                    </div>
                                    <div class="col-6 pt-2">
                                        <select id="both_ga4_property_id" name="measurement_id" class="form-select form-select-lg mb-3 selecttwo" style="width: 100%" <?php echo esc_attr($is_sel_disable); ?>>
                                            <option value="">Select Measurement ID</option>
                                            <?php if (!empty($measurement_id)) { ?>
                                                <option selected><?php echo esc_attr($measurement_id); ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-2 d-flex justify-content-start">
                                    <button type="button" class="btn btn-sm d-flex conv-enable-selection conv-link-blue justify-content-start">
                                        <span class="material-symbols-outlined md-18">edit</span>
                                        <span class="px-1">Edit</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <!-- Google Analytics Both End -->

                    </div>
                </form>
            </div>
        </li>
    </ul>



</div>

<script>
    // get list of google analytics account
    function list_analytics_account(tvc_data, selelement, currele, page = 1) {
        var conversios_onboarding_nonce = "<?php echo esc_attr(wp_create_nonce('conversios_onboarding_nonce')); ?>";
        jQuery.ajax({
            type: "POST",
            dataType: "json",
            url: tvc_ajax_url,
            data: {
                action: "get_analytics_account_list",
                tvc_data: tvc_data,
                page: page,
                conversios_onboarding_nonce: conversios_onboarding_nonce
            },
            success: function(response) {
                if (response && response.error == false) {
                    var error_msg = 'null';
                    if (response?.data?.items.length > 0) {
                        var AccOptions = '';
                        var selected = '';
                        response?.data?.items.forEach(function(item) {
                            AccOptions = AccOptions + '<option value="' + item.id + '"> ' + item.name + '-' + item.id + '</option>';
                        });
                        jQuery('#ga3_analytic_account_id').append(AccOptions); //GA3
                        jQuery('#ga4_analytic_account_id').append(AccOptions); //GA4 
                        jQuery('#both_ga3_analytic_account_id').append(AccOptions); //BOTH GA3
                        jQuery('#both_ga4_analytic_account_id').append(AccOptions); //BOTH GA4

                        selelement.prop("disabled", false);
                        // if (currele.hasClass("select2-hidden-accessible")) {
                        //     currele.trigger("change");
                        //     currele.select2("open");    
                        // }
                        jQuery(".conv-enable-selection").addClass('d-none');

                    } else if (page > 1) { //load more error message
                        jQuery('.tvc_load_more_acc').hide(); //hide load more
                        //add_message("error", "There are no more Google Analytics accounts associated with this email.");
                    } else {
                        //add_message("error", "There are no Google Analytics accounts associated with this email.");
                    }

                } else if (response && response.error == true && response.error != undefined) {
                    const errors = response.error[0];
                    //add_message("error", errors);
                    var error_msg = errors;
                } else {
                    //add_message("error", "There are no Google Analytics accounts associated with this email.");
                }
                jQuery("#tvc-ga4-acc-edit-acc_box")?.removeClass('tvc-disable-edits');
                conv_change_loadingbar("hide");
            }
        });
    }


    // get list properties dropdown options
    function list_analytics_web_properties(type, tvc_data, account_id, thisselid) {
        var conversios_onboarding_nonce = "<?php echo esc_attr(wp_create_nonce('conversios_onboarding_nonce')); ?>";
        jQuery.ajax({
            type: "POST",
            dataType: "json",
            url: tvc_ajax_url,
            data: {
                action: "get_analytics_web_properties",
                account_id: account_id,
                type: type,
                tvc_data: tvc_data,
                conversios_onboarding_nonce: conversios_onboarding_nonce
            },
            success: function(response) {
                if (response && response.error == false) {
                    var error_msg = 'null';
                    if (type == "UA") {
                        jQuery('#ga3_property_id').empty().trigger("change");
                        jQuery('#both_ga3_property_id').empty().trigger("change");
                        if (response?.data?.wep_properties.length > 0) {
                            var PropOptions = '<option value="">Select Property Id</option>';
                            var selected = '';
                            response?.data?.wep_properties.forEach(function(item) {
                                PropOptions = PropOptions + '<option value="' + item.webPropertyId + '"> ' + item.webPropertyId + ' - ' + item.name + '</option>';
                            });
                            jQuery('#ga3_property_id').append(PropOptions);
                            jQuery('#both_ga3_property_id').append(PropOptions);
                        } else {
                            var PropOptions = '<option value="">No GA3 Property Found</option>';
                            jQuery('#ga3_property_id').append(PropOptions);
                            jQuery('#both_ga3_property_id').append(PropOptions);
                            //add_message("error", "There are no Google Analytics Properties associated with this email.");
                        }
                        jQuery(".ga_analytic_account_id_ua:not(#" + thisselid + ")").val(account_id).trigger("change");
                    }

                    if (type == "GA4") {
                        jQuery('#ga4_property_id').empty().trigger("change");
                        jQuery('#both_ga4_property_id').empty().trigger("change");
                        if (response?.data?.wep_measurement.length > 0) {
                            var streamOptions = '<option value="">Select Measurement Id</option>';
                            var selected = '';
                            response?.data?.wep_measurement.forEach(function(item) {
                                let dataName = item.name.split("/");
                                streamOptions = streamOptions + '<option value="' + item.measurementId + '">' + item.measurementId + ' - ' + item.displayName + '</option>';
                            });
                            jQuery('#ga4_property_id').append(streamOptions);
                            jQuery('#both_ga4_property_id').append(streamOptions);
                        } else {
                            var streamOptions = '<option value="">No GA4 Property Found</option>';
                            jQuery('#ga3_property_id').append(streamOptions);
                            jQuery('#both_ga3_property_id').append(streamOptions);
                        }
                        jQuery(".ga_analytic_account_id_ga4:not(#" + thisselid + ")").val(account_id).trigger("change");
                    }

                } else if (response && response.error == true && response.error != undefined) {
                    const errors = response.error[0];
                    console.log(errors);
                    //add_message("error", errors);
                    var error_msg = errors;
                } else {
                    //add_message("error", "There are no Google Analytics Properties associated with this email.");
                    console.log('ERRORRRRR');
                }
                conv_change_loadingbar("hide");
            }
        });
    }

    function load_ga_accounts(tvc_data) {
        conv_change_loadingbar("show");
        jQuery(".conv-enable-selection").addClass('disabled');
        var selele = jQuery(".conv-enable-selection").closest(".conv-hideme-gasettings").find("select.ga_analytic_account_id");
        var currele = jQuery(this).closest(".conv-hideme-gasettings").find("select.ga_analytic_account_id");
        list_analytics_account(tvc_data, selele, currele);

        <?php if ($tracking_option == '') { ?>
            jQuery("#tracking_option_ga4").trigger("click");
            jQuery("#tracking_option_ga4").prop("checked");
            jQuery(".conv-btn-connect").removeClass("conv-btn-connect-disabled");
            jQuery(".conv-btn-connect").addClass("conv-btn-connect-enabled-google");
            jQuery(".conv-btn-connect").text('Save');
        <?php } ?>
    }

    //Onload functions
    jQuery(function() {
        var tvc_data = "<?php echo esc_js(wp_json_encode($tvc_data)); ?>";
        var tvc_ajax_url = '<?php echo esc_url_raw(admin_url('admin-ajax.php')); ?>';
        let subscription_id = "<?php echo esc_attr($subscriptionId); ?>";
        let plan_id = "<?php echo esc_attr($plan_id); ?>";
        let app_id = "<?php echo esc_attr(CONV_APP_ID); ?>";
        let bagdeVal = "yes";
        let convBadgeVal = "<?php echo esc_attr($convBadgeVal); ?>";

        jQuery(".selecttwo").select2({
            minimumResultsForSearch: -1,
            placeholder: function() {
                jQuery(this).data('placeholder');
            }
        });

        jQuery('input[type=radio][name=tracking_option]').change(function() {
            jQuery(".conv-hideme-gasettings").addClass('d-none');
            jQuery(this).parent().find(".conv-hideme-gasettings").removeClass('d-none');
        });

        <?php
        $g_mail = get_option('ee_customer_gmail');
        if ((empty($ua_analytic_account_id) && empty($ga4_analytic_account_id) && !empty($g_mail)) || (isset($_GET['subscription_id']) === TRUE && sanitize_text_field($_GET['subscription_id']) !== '')) { ?>
            load_ga_accounts(tvc_data);
        <?php } ?>


        jQuery(".conv-enable-selection").click(function() {
            conv_change_loadingbar("show");
            jQuery(".conv-enable-selection").addClass('disabled');
            var selele = jQuery(".conv-enable-selection").closest(".conv-hideme-gasettings").find("select.ga_analytic_account_id");
            var currele = jQuery(this).closest(".conv-hideme-gasettings").find("select.ga_analytic_account_id");
            list_analytics_account(tvc_data, selele, currele);
        });

        jQuery(document).on('select2:select', '.ga_analytic_account_id', function(e) {
            if (jQuery(this).val() != "" && jQuery(this).val() != undefined) {
                conv_change_loadingbar("show");
                var account_id = jQuery(e.target).val();
                var acctype = jQuery(e.target).attr('acctype');
                var thisselid = e.target.getAttribute('id');
                list_analytics_web_properties(acctype, tvc_data, account_id, thisselid);
                jQuery(".ga_analytic_account_id").closest(".conv-hideme-gasettings").find("select").prop("disabled", false);
            } else {
                jQuery(".ga_analytic_account_id").closest(".conv-hideme-gasettings").find("select").prop("disabled", false);
            }

        });

        jQuery(document).on("change", "form#gasettings_form", function() {
            <?php if ($cust_g_email !== "") { ?>
                jQuery(".conv-btn-connect").removeClass("conv-btn-connect-disabled");
                jQuery(".conv-btn-connect").addClass("conv-btn-connect-enabled-google");
                jQuery(".conv-btn-connect").text('Save');
            <?php } else { ?>
                jQuery(".tvc_google_signinbtn").trigger("click");
            <?php } ?>
        });

        // Save data
        jQuery(document).on("click", ".conv-btn-connect-enabled-google", function() {
            var tracking_option = jQuery('input[type=radio][name=tracking_option]:checked').val();
            var box_id = "#analytics_box_" + tracking_option;
            var has_error = 0;
            var selected_vals = {};
            selected_vals["ua_analytic_account_id"] = "";
            selected_vals["property_id"] = "";
            selected_vals["ga4_analytic_account_id"] = "";
            selected_vals["measurement_id"] = "";
            selected_vals["subscription_id"] = "<?php echo esc_attr($tvc_data['subscription_id']) ?>";
            //= {ua_analytic_account_id: "", property_id: "", ga4_analytic_account_id: "", measurement_id: ""};
            jQuery(box_id).find("select").each(function() {
                if (!jQuery(this).val() || jQuery(this).val() == "" || jQuery(this).val() == "undefined") {
                    has_error = 1;
                    return;
                } else {
                    selected_vals[jQuery(this).attr('name')] = jQuery(this).val();
                }
            });
            selected_vals["tracking_option"] = tracking_option;
            if (has_error == 1) {
                jQuery(".conv-btn-connect").addClass("conv-btn-connect-disabled");
                jQuery(".conv-btn-connect").removeClass("conv-btn-connect-enabled-google");
                jQuery(".conv-btn-connect").text('Save');
                alert("Please select required fields to continue.");
            } else {
                jQuery.ajax({
                    type: "POST",
                    dataType: "json",
                    url: tvc_ajax_url,
                    data: {
                        action: "conv_save_pixel_data",
                        pix_sav_nonce: "<?php echo esc_attr(wp_create_nonce('pix_sav_nonce_val')); ?>",
                        conv_options_data: selected_vals,
                        conv_options_type: ["eeoptions", "eeapidata", "middleware"],
                        conv_tvc_data: tvc_data,
                    },
                    beforeSend: function() {
                        jQuery(".conv-btn-connect-enabled-google").text("Saving...");
                        conv_change_loadingbar("show");
                        jQuery(this).addClass('disabled');
                    },
                    success: function(response) {
                        var user_modal_txt = "Congratulations, you have successfully connected your";
                        var user_modal_txt2 = "<br>GA3 Account ID: " + selected_vals['property_id'];
                        var user_modal_txt3 = "<br>GA4 account ID: " + selected_vals['measurement_id'];

                        if (tracking_option == "BOTH") {
                            user_modal_txt = user_modal_txt + " " + user_modal_txt2 + " " + user_modal_txt3;
                        }
                        if (tracking_option == "UA") {
                            user_modal_txt = user_modal_txt + " " + user_modal_txt2;
                        }
                        if (tracking_option == "GA4") {
                            user_modal_txt = user_modal_txt + " " + user_modal_txt3;
                        }

                        if (response == "0" || response == "1") {
                            jQuery(".conv-btn-connect-enabled-google").text("Connect");
                            jQuery("#conv_save_success_txt").html(user_modal_txt);
                            jQuery("#conv_save_success_modal").modal("show");
                        }

                    }
                });
            }

        });

    });
</script>