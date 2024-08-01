import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import "./nav.css";
import oga from "./correctlogo.png";
import oga1 from "./correctlogo.png";
import oga3 from "./correctlogo.png";
import oga2 from "./correctlogo.png";
import oga4 from "./correctlogo.png";
const Navbar = () => {
  const srcset = `${oga1} 1024w, ${oga2} 300w, ${oga3} 768w, ${oga4} 1536w, ${oga} 800w`;
  return (
    <>
      <header
        id="masthead"
        itemscope="itemscope"
        itemtype="https://schema.org/WPHeader"
      >
        <div
          data-elementor-type="page"
          data-elementor-id="675"
          class="elementor elementor-675"
        >
          <section
            class="elementor-section elementor-top-section elementor-element elementor-element-9bb3429 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="9bb3429"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-default">
              <div
                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-daf194f"
                data-id="daf194f"
                data-element_type="column"
                data-settings='{"background_background":"classic"}'
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <section
                    class="elementor-section elementor-inner-section elementor-element elementor-element-7b4fb47 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="7b4fb47"
                    data-element_type="section"
                  >
                    <div class="elementor-container elementor-column-gap-no">
                      <div
                        class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-b36bfa2"
                        data-id="b36bfa2"
                        data-element_type="column"
                      >
                        <div class="elementor-widget-wrap elementor-element-populated">
                          <div
                            class="elementor-element elementor-element-c0e0061 elementor-widget elementor-widget-image"
                            data-id="c0e0061"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div class="elementor-widget-container">
                              <img
                                fetchpriority="high"
                                width="800"
                                height="244"
                                src={oga}
                                class="attachment-large size-large wp-image-222"
                                alt=""
                                decoding="async"
                                srcSet={srcset}
                                sizes="(max-width: 800px) 100vw, 800px"
                              />{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c5e1d36"
                        data-id="c5e1d36"
                        data-element_type="column"
                      >
                        <div class="elementor-widget-wrap elementor-element-populated">
                          <div
                            class="elementor-element elementor-element-25ba644 elementor-widget elementor-widget-jkit_nav_menu"
                            data-id="25ba644"
                            data-element_type="widget"
                            data-settings='{"st_submenu_item_text_hover_bg_background_background":"gradient"}'
                            data-widget_type="jkit_nav_menu.default"
                          >
                            <div class="elementor-widget-container">
                              <div
                                class="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title jeg_module_546__66a669ed26444"
                                data-item-indicator='&lt;i aria-hidden="true" class="jki jki-chevron-down-light"&gt;&lt;/i&gt;'
                              >
                                <button
                                  aria-label="open-menu"
                                  class="jkit-hamburger-menu hover-gradient"
                                >
                                  <span>
                                    <i
                                      aria-hidden="true"
                                      class="fas fa-bars"
                                    ></i>
                                  </span>
                                </button>
                                <div
                                  class="jkit-menu-wrapper"
                                  style={{
                                    backgroundColor: "white",
                                  }}
                                >
                                  <div class="jkit-menu-container">
                                    <ul
                                      id="menu-menu"
                                      class="jkit-menu jkit-menu-direction-flex jkit-submenu-position-top"
                                    >
                                      <li
                                        id="menu-item-1105"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-546 current_page_item menu-item-1105"
                                      >
                                        <a href="/" aria-current="page">
                                          Home
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-1104"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1104"
                                      >
                                        <a
                                          href="/about"
                                          style={{ color: "black" }}
                                        >
                                          About
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-1103"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1103"
                                      >
                                        <a
                                          href="services"
                                          style={{ color: "black" }}
                                        >
                                          Services
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-1102"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1103"
                                      >
                                        <a
                                          href="faq"
                                          style={{ color: "black" }}
                                        >
                                          Faq
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-1101"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1103"
                                      >
                                        <a
                                          href="pos-agent"
                                          style={{ color: "black" }}
                                        >
                                          Become a POS agent
                                        </a>
                                      </li>

                                      <li
                                        id="menu-item-1100"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1098"
                                      >
                                        <a
                                          href="contact"
                                          style={{ color: "black" }}
                                        >
                                          Contact
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-login"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-login"
                                      >
                                        <a href="#" style={{ color: "black" }}>
                                          Login
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="jkit-nav-identity-panel">
                                    <div class="jkit-nav-site-title">
                                      <a
                                        href="https://kit.baliniz.com/payze"
                                        class="jkit-nav-logo"
                                      >
                                        <img
                                          width="800"
                                          height="244"
                                          src={oga}
                                          class="attachment-full size-full"
                                          alt=""
                                          url="wp-content/uploads/sites/27/2022/06/logo-payze-2.png"
                                          source="library"
                                          decoding="async"
                                        />
                                      </a>
                                    </div>
                                    <button
                                      aria-label="close-menu"
                                      class="jkit-close-menu hover-gradient"
                                    >
                                      <span>
                                        <i
                                          aria-hidden="true"
                                          class="fas fa-times"
                                        ></i>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div class="jkit-overlay"></div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-955bece elementor-hidden-mobile"
                        data-id="955bece"
                        data-element_type="column"
                      >
                        <div class="elementor-widget-wrap elementor-element-populated">
                          <div
                            class="elementor-element elementor-element-ef58cab elementor-align-right elementor-widget elementor-widget-button"
                            data-id="ef58cab"
                            data-element_type="widget"
                            data-widget_type="button.default"
                          >
                            <div class="elementor-widget-container">
                              <div class="elementor-button-wrapper">
                                <a
                                  class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"
                                  href="#"
                                >
                                  <span class="elementor-button-content-wrapper">
                                    <span class="elementor-button-icon elementor-align-icon-left">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-sign-in-alt"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-button-text">
                                      Login
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Navbar;
