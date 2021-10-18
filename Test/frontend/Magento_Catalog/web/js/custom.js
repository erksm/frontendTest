define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    $(document).ready(function(){
        $('.box-img').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="prev-arrow"><img src="source/images/icons/prev.svg" alt="Previous slide" title="Previous slide" ></buttton>',
            nextArrow: '<button type="button" class="next-arrow"><img src="source/images/icons/next.svg" alt="Next slide" title="Next slide" ></buttton>',
        });
    
        const swatchOption = document.querySelectorAll('.swatch-option');
        const toggleModal = document.querySelectorAll('#modal-btn, #close-modal');
        const productModal = document.querySelector('.product-modal');
        const addItem = document.querySelectorAll('#qty-increment');
        const removeItem = document.querySelectorAll('#qty-decrement');
        const inputVal = document.querySelectorAll('#qty');
    
        swatchOption.forEach(function(el) {
            el.addEventListener('click', function() {
                swatchOption.forEach(function(element) {
                    element.classList.remove('active');
                })
                el.classList.add('active');
            });
        });
    
        toggleModal.forEach(function(el) {
            el.addEventListener('click', function() {
                productModal.classList.toggle('active');
            });
        });
        
        addItem.forEach(function(el) {
            el.addEventListener('click', function() {
                let i = this.parentElement.querySelector('#qty').value;
                i++;
                this.parentElement.querySelector('#qty').value = i;
            });
        });
    
        removeItem.forEach(function(el) {
            el.addEventListener('click', function() {
                if(this.parentElement.querySelector('#qty').value <= 1) {
                    this.parentElement.querySelector('#qty').value = 1;
                } else {
                    let i = this.parentElement.querySelector('#qty').value;
                    i--;
                    this.parentElement.querySelector('#qty').value = i;
                }
            });
        });
    
        inputVal.forEach(function(el) {
            el.addEventListener('focusout', function() {
                this.value <=0 ? this.value = 1 : '';
            })
        });
    });
});
