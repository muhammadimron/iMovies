class ThankFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <style>
                .p-footer {
                    font-size: 0.8rem;
                }

                @media screen and (max-width: 1056px) {
                    .p-footer {
                        font-size: 0.7rem;
                    }
                }

                @media screen and (max-width: 767px) {
                    .p-footer {
                        font-size: 0.5rem;
                    }
                }
            </style>

            <p class="text-light bg-dark text-center py-3 mb-0 p-footer">Copyright @2022 | Muhammad Imron (ID Camp 2022 with Dicoding Academy)</p>
        `;
    }
}

customElements.define('thank-footer', ThankFooter);