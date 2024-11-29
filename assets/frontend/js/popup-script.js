jQuery(document).ready(function($) {
    // Show popup on page load with animation
    setTimeout(function() {
        $('#wc-delhi-member-popup').show().addClass('show');
    }, 500);

    // Close popup when clicking the close button
    $('#wc-delhi-member-popup .popup-close').on('click', function() {
        $('#wc-delhi-member-popup').removeClass('show');
        setTimeout(function() {
            $('#wc-delhi-member-popup').hide();
        }, 300);
    });

    // Close popup when clicking outside the popup content
    $('#wc-delhi-member-popup').on('click', function(e) {
        if ($(e.target).attr('id') === 'wc-delhi-member-popup') {
            $('#wc-delhi-member-popup').removeClass('show');
            setTimeout(function() {
                $('#wc-delhi-member-popup').hide();
            }, 300);
        }
    });

    // Prevent closing when clicking inside popup content
    $('#wc-delhi-member-popup .popup-content').on('click', function(e) {
        e.stopPropagation();
    });
});