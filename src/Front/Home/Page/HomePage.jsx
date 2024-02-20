import React, { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
  <div>
  {/* ===============================================*/}{/*    Main Content*/}{/* ===============================================*/}
  <main className="main" id="top">
    <nav className="navbar navbar-standard navbar-expand-lg fixed-top navbar-dark" data-navbar-darken-on-scroll="data-navbar-darken-on-scroll">
      <div className="container"><a className="navbar-brand" href="../index.html"><span className="text-white dark__text-white">Falcon</span></a><button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse scrollbar" id="navbarStandard">
          <ul className="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dashboards">Dashboard</a>
              <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                <div className="bg-white dark__bg-1000 rounded-3 py-2"><a className="dropdown-item link-600 fw-medium" href="../index.html">Default</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/analytics.html">Analytics</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/crm.html">CRM</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/e-commerce.html">E commerce</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/lms.html">LMS<span className="badge rounded-pill ms-2 badge-subtle-success">New</span></a><a className="dropdown-item link-600 fw-medium" href="../dashboard/project-management.html">Management</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/saas.html">SaaS</a><a className="dropdown-item link-600 fw-medium" href="../dashboard/support-desk.html">Support desk<span className="badge rounded-pill ms-2 badge-subtle-success">New</span></a></div>
              </div>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="apps">App</a>
              <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="apps">
                <div className="card navbar-card-app shadow-none dark__bg-1000">
                  <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="../assets/img/icons/spot-illustrations/authentication-corner.png" width={130} alt />
                    <div className="row">
                      <div className="col-6 col-md-4">
                        <div className="nav flex-column"><a className="nav-link py-1 link-600 fw-medium" href="../app/calendar.html">Calendar</a><a className="nav-link py-1 link-600 fw-medium" href="../app/chat.html">Chat</a><a className="nav-link py-1 link-600 fw-medium" href="../app/kanban.html">Kanban</a>
                          <p className="nav-link text-700 mb-0 fw-bold">Social</p><a className="nav-link py-1 link-600 fw-medium" href="../app/social/feed.html">Feed</a><a className="nav-link py-1 link-600 fw-medium" href="../app/social/activity-log.html">Activity log</a><a className="nav-link py-1 link-600 fw-medium" href="../app/social/notifications.html">Notifications</a><a className="nav-link py-1 link-600 fw-medium" href="../app/social/followers.html">Followers</a>
                          <p className="nav-link text-700 mb-0 fw-bold">Support Desk</p><a className="nav-link py-1 link-600 fw-medium" href="../app/support-desk/table-view.html">Table view</a><a className="nav-link py-1 link-600 fw-medium" href="../app/support-desk/card-view.html">Card view</a><a className="nav-link py-1 link-600 fw-medium" href="../app/support-desk/contacts.html">Contacts</a><a className="nav-link py-1 link-600 fw-medium" href="../app/support-desk/contact-details.html">Contact details</a><a className="nav-link py-1 link-600 fw-medium" href="../app/support-desk/tickets-preview.html">Tickets preview</a><a className="nav-link py-1 link-600 fw-medium" href="../app/support-desk/quick-links.html">Quick links</a>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">E-Learning</p><a className="nav-link py-1 link-600 fw-medium" href="../app/e-learning/course/course-list.html">Course list</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-learning/course/course-grid.html">Course grid</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-learning/course/course-details.html">Course details</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-learning/course/create-a-course.html">Create a course</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-learning/student-overview.html">Student overview</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-learning/trainer-profile.html">Trainer profile</a>
                          <p className="nav-link text-700 mb-0 fw-bold">Events</p><a className="nav-link py-1 link-600 fw-medium" href="../app/events/create-an-event.html">Create an event</a><a className="nav-link py-1 link-600 fw-medium" href="../app/events/event-detail.html">Event detail</a><a className="nav-link py-1 link-600 fw-medium" href="../app/events/event-list.html">Event list</a>
                          <p className="nav-link text-700 mb-0 fw-bold">Email</p><a className="nav-link py-1 link-600 fw-medium" href="../app/email/inbox.html">Inbox</a><a className="nav-link py-1 link-600 fw-medium" href="../app/email/email-detail.html">Email detail</a><a className="nav-link py-1 link-600 fw-medium" href="../app/email/compose.html">Compose</a>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">E-Commerce</p><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/product/product-list.html">Product list</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/product/product-grid.html">Product grid</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/product/product-details.html">Product details</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/product/add-product.html">Add product</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/orders/order-list.html">Order list</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/orders/order-details.html">Order details</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/customers.html">Customers</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/customer-details.html">Customer details</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/shopping-cart.html">Shopping cart</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/checkout.html">Checkout</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/billing.html">Billing</a><a className="nav-link py-1 link-600 fw-medium" href="../app/e-commerce/invoice.html">Invoice</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="pagess">Pages</a>
              <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="pagess">
                <div className="card navbar-card-pages shadow-none dark__bg-1000">
                  <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="../assets/img/icons/spot-illustrations/authentication-corner.png" width={130} alt />
                    <div className="row">
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Simple Auth</p><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/forgot-password.html">Forgot password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/confirm-mail.html">Confirm mail</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/reset-password.html">Reset password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/simple/lock-screen.html">Lock screen</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Card Auth</p><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/forgot-password.html">Forgot password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/confirm-mail.html">Confirm mail</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/reset-password.html">Reset password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/card/lock-screen.html">Lock screen</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Split Auth</p><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/forgot-password.html">Forgot password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/confirm-mail.html">Confirm mail</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/reset-password.html">Reset password</a><a className="nav-link py-1 link-600 fw-medium" href="authentication/split/lock-screen.html">Lock screen</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Layouts</p><a className="nav-link py-1 link-600 fw-medium" href="../demo/navbar-vertical.html">Navbar vertical</a><a className="nav-link py-1 link-600 fw-medium" href="../demo/navbar-top.html">Top nav</a><a className="nav-link py-1 link-600 fw-medium" href="../demo/navbar-double-top.html">Double top<span className="badge rounded-pill ms-2 badge-subtle-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="../demo/combo-nav.html">Combo nav</a>
                          <p className="nav-link text-700 mb-0 fw-bold">Others</p><a className="nav-link py-1 link-600 fw-medium" href="starter.html">Starter</a><a className="nav-link py-1 link-600 fw-medium" href="landing.html">Landing</a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">User</p><a className="nav-link py-1 link-600 fw-medium" href="user/profile.html">Profile</a><a className="nav-link py-1 link-600 fw-medium" href="user/settings.html">Settings</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Pricing</p><a className="nav-link py-1 link-600 fw-medium" href="pricing/pricing-default.html">Pricing default</a><a className="nav-link py-1 link-600 fw-medium" href="pricing/pricing-alt.html">Pricing alt</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Errors</p><a className="nav-link py-1 link-600 fw-medium" href="errors/404.html">404</a><a className="nav-link py-1 link-600 fw-medium" href="errors/500.html">500</a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Miscellaneous</p><a className="nav-link py-1 link-600 fw-medium" href="miscellaneous/associations.html">Associations</a><a className="nav-link py-1 link-600 fw-medium" href="miscellaneous/invite-people.html">Invite people</a><a className="nav-link py-1 link-600 fw-medium" href="miscellaneous/privacy-policy.html">Privacy policy</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">FAQ</p><a className="nav-link py-1 link-600 fw-medium" href="faq/faq-basic.html">Faq basic</a><a className="nav-link py-1 link-600 fw-medium" href="faq/faq-alt.html">Faq alt</a><a className="nav-link py-1 link-600 fw-medium" href="faq/faq-accordion.html">Faq accordion</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Other Auth</p><a className="nav-link py-1 link-600 fw-medium" href="authentication/wizard.html">Wizard</a><a className="nav-link py-1 link-600 fw-medium" href="../index-2.html#authentication-modal" data-bs-toggle="modal">Modal</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="moduless">Modules</a>
              <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="moduless">
                <div className="card navbar-card-components shadow-none dark__bg-1000">
                  <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="../assets/img/icons/spot-illustrations/authentication-corner.png" width={130} alt />
                    <div className="row">
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Components</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/accordion.html">Accordion</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/alerts.html">Alerts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/anchor.html">Anchor</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/animated-icons.html">Animated icons</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/background.html">Background</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/badges.html">Badges</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/bottom-bar.html">Bottom bar<span className="badge rounded-pill ms-2 badge-subtle-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/breadcrumbs.html">Breadcrumbs</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/buttons.html">Buttons</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/calendar.html">Calendar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/cards.html">Cards</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/carousel/bootstrap.html">Bootstrap carousel</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column mt-md-4 pt-md-1"><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/carousel/swiper.html">Swiper</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/collapse.html">Collapse</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/cookie-notice.html">Cookie notice</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/countup.html">Countup</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/draggable.html">Draggable</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/dropdowns.html">Dropdowns</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/jquery-components.html">Jquery<span className="badge rounded-pill ms-2 badge-subtle-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/list-group.html">List group</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/modals.html">Modals</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/navs.html">Navs</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/vertical-navbar.html">Navbar vertical</a></div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column mt-xxl-4 pt-xxl-1"><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/top-navbar.html">Top nav</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/double-top-navbar.html">Double top<span className="badge rounded-pill ms-2 badge-subtle-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/combo-navbar.html">Combo nav</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/offcanvas.html">Offcanvas</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/avatar.html">Avatar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/images.html">Images</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/figures.html">Figures</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/hoverbox.html">Hoverbox</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pictures/lightbox.html">Lightbox</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/progress-bar.html">Progress bar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/placeholder.html">Placeholder</a></div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column mt-xxl-4 pt-xxl-1"><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/pagination.html">Pagination</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/popovers.html">Popovers</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/scrollspy.html">Scrollspy</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/search.html">Search</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/spinners.html">Spinners</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/timeline.html">Timeline</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/toasts.html">Toasts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/tooltips.html">Tooltips</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/treeview.html">Treeview</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/typed-text.html">Typed text</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/videos/embed.html">Embed</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/components/videos/plyr.html">Plyr</a></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Utilities</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/background.html">Background</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/borders.html">Borders</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/clearfix.html">Clearfix</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/colors.html">Colors</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/colored-links.html">Colored links</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/display.html">Display</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/flex.html">Flex</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/float.html">Float</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/focus-ring.html">Focus ring</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/grid.html">Grid</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/icon-link.html">Icon link</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/overlayscrollbar.html">Overlay scrollbar</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/position.html">Position</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/ratio.html">Ratio</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/spacing.html">Spacing</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/sizing.html">Sizing</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/stretched-link.html">Stretched link</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/text-truncation.html">Text truncation</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/typography.html">Typography</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/vertical-align.html">Vertical align</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/vertical-rule.html">Vertical rule</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/utilities/visibility.html">Visibility</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Tables</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/tables/basic-tables.html">Basic tables</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/tables/advance-tables.html">Advance tables</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/tables/bulk-select.html">Bulk select</a>
                          <p className="nav-link text-700 mb-0 fw-bold">Charts</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/chartjs.html">Chartjs</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/d3js.html">D3js<span className="badge rounded-pill ms-2 badge-subtle-success">New</span></a>
                          <p className="nav-link text-700 mb-0 fw-bold">ECharts</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/line-charts.html">Line charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/bar-charts.html">Bar charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/candlestick-charts.html">Candlestick charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/geo-map.html">Geo map</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/scatter-charts.html">Scatter charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/pie-charts.html">Pie charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/gauge-charts.html">Gauge charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/radar-charts.html">Radar charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/heatmap-charts.html">Heatmap charts</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/charts/echarts/how-to-use.html">How to use</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column">
                          <p className="nav-link text-700 mb-0 fw-bold">Forms</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/form-control.html">Form control</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/input-group.html">Input group</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/select.html">Select</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/checks.html">Checks</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/range.html">Range</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/basic/layout.html">Layout</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/advance-select.html">Advance select</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/date-picker.html">Date picker</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/editor.html">Editor</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/emoji-button.html">Emoji button</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/file-uploader.html">File uploader</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/input-mask.html">Input mask</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/range-slider.html">Range slider</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/advance/rating.html">Rating</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/floating-labels.html">Floating labels</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/wizard.html">Wizard</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/forms/validation.html">Validation</a>
                        </div>
                      </div>
                      <div className="col-6 col-xxl-3">
                        <div className="nav flex-column pt-xxl-1">
                          <p className="nav-link text-700 mb-0 fw-bold">Icons</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/icons/font-awesome.html">Font awesome</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/icons/bootstrap-icons.html">Bootstrap icons</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/icons/feather.html">Feather</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/icons/material-icons.html">Material icons</a>
                          <p className="nav-link text-700 mb-0 fw-bold">Maps</p><a className="nav-link py-1 link-600 fw-medium" href="../modules/maps/google-map.html">Google map</a><a className="nav-link py-1 link-600 fw-medium" href="../modules/maps/leaflet-map.html">Leaflet map</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="documentations">Documentation</a>
              <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="documentations">
                <div className="bg-white dark__bg-1000 rounded-3 py-2"><a className="dropdown-item link-600 fw-medium" href="../documentation/getting-started.html">Getting started</a><a className="dropdown-item link-600 fw-medium" href="../documentation/customization/configuration.html">Configuration</a><a className="dropdown-item link-600 fw-medium" href="../documentation/customization/styling.html">Styling<span className="badge rounded-pill ms-2 badge-subtle-success">Updated</span></a><a className="dropdown-item link-600 fw-medium" href="../documentation/customization/dark-mode.html">Dark mode</a><a className="dropdown-item link-600 fw-medium" href="../documentation/customization/plugin.html">Plugin</a><a className="dropdown-item link-600 fw-medium" href="../documentation/faq.html">Faq</a><a className="dropdown-item link-600 fw-medium" href="../documentation/gulp.html">Gulp</a><a className="dropdown-item link-600 fw-medium" href="../documentation/design-file.html">Design file</a><a className="dropdown-item link-600 fw-medium" href="../changelog.html">Changelog</a></div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-flex align-items-center me-2">
              <div className="dropdown theme-control-dropdown landing-drop"><a className="nav-link d-flex align-items-center dropdown-toggle fa-icon-wait pe-1" href="#" role="button" id="themeSwitchDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="d-none d-lg-block"><span className="fas fa-sun" data-theme-dropdown-toggle-icon="light" /><span className="fas fa-moon" data-theme-dropdown-toggle-icon="dark" /><span className="fas fa-adjust" data-theme-dropdown-toggle-icon="auto" /></span><span className="d-lg-none">Switch theme</span></a>
                <div className="dropdown-menu dropdown-menu-end dropdown-caret border py-0 mt-1" aria-labelledby="themeSwitchDropdown">
                  <div className="bg-white dark__bg-1000 rounded-2 py-2"><button className="dropdown-item link-600 d-flex align-items-center gap-2" type="button" value="light" data-theme-control="theme"><span className="fas fa-sun" />Light<span className="fas fa-check dropdown-check-icon ms-auto text-600" /></button><button className="dropdown-item link-600 d-flex align-items-center gap-2" type="button" value="dark" data-theme-control="theme"><span className="fas fa-moon" data-fa-transform />Dark<span className="fas fa-check dropdown-check-icon ms-auto text-600" /></button><button className="dropdown-item link-600 d-flex align-items-center gap-2" type="button" value="auto" data-theme-control="theme"><span className="fas fa-adjust" data-fa-transform />Auto<span className="fas fa-check dropdown-check-icon ms-auto text-600" /></button></div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdownLogin" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</a>
              <div className="dropdown-menu dropdown-caret dropdown-menu-end dropdown-menu-card" aria-labelledby="navbarDropdownLogin">
                <div className="card shadow-none navbar-card-login">
                  <div className="card-body fs-10 p-4 fw-normal">
                    <div className="row text-start justify-content-between align-items-center mb-2">
                      <div className="col-auto">
                        <h5 className="mb-0">Log in</h5>
                      </div>
                      <div className="col-auto">
                        <p className="fs-10 text-600 mb-0">or <a href="authentication/simple/register.html">Create an account</a></p>
                      </div>
                    </div>
                    <form>
                      <div className="mb-3"><input className="form-control" type="email" placeholder="Email address" /></div>
                      <div className="mb-3"><input className="form-control" type="password" placeholder="Password" /></div>
                      <div className="row flex-between-center">
                        <div className="col-auto">
                          <div className="form-check mb-0"><input className="form-check-input" type="checkbox" id="modal-checkbox" /><label className="form-check-label mb-0" htmlFor="modal-checkbox">Remember me</label></div>
                        </div>
                        <div className="col-auto"><a className="fs-10" href="authentication/simple/forgot-password.html">Forgot Password?</a></div>
                      </div>
                      <div className="mb-3"><button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Log in</button></div>
                    </form>
                    <div className="position-relative mt-4">
                      <hr />
                      <div className="divider-content-center">or log in with</div>
                    </div>
                    <div className="row g-2 mt-2">
                      <div className="col-sm-6"><a className="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span className="fab fa-google-plus-g me-2" data-fa-transform="grow-8" /> google</a></div>
                      <div className="col-sm-6"><a className="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span className="fab fa-facebook-square me-2" data-fa-transform="grow-8" /> facebook</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link" href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body p-4">
            <div className="row text-start justify-content-between align-items-center mb-2">
              <div className="col-auto">
                <h5 id="modalLabel">Register</h5>
              </div>
              <div className="col-auto">
                <p className="fs-10 text-600 mb-0">Have an account? <a href="authentication/simple/login.html">Login</a></p>
              </div>
            </div>
            <form>
              <div className="mb-3"><input className="form-control" type="text" autoComplete="on" placeholder="Name" /></div>
              <div className="mb-3"><input className="form-control" type="email" autoComplete="on" placeholder="Email address" /></div>
              <div className="row gx-2">
                <div className="mb-3 col-sm-6"><input className="form-control" type="password" autoComplete="on" placeholder="Password" /></div>
                <div className="mb-3 col-sm-6"><input className="form-control" type="password" autoComplete="on" placeholder="Confirm Password" /></div>
              </div>
              <div className="form-check"><input className="form-check-input" type="checkbox" id="modal-register-checkbox" /><label className="form-label" htmlFor="modal-register-checkbox">I accept the <a href="#!">terms </a>and <a className="white-space-nowrap" href="#!">privacy policy</a></label></div>
              <div className="mb-3"><button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Register</button></div>
            </form>
            <div className="position-relative mt-4">
              <hr />
              <div className="divider-content-center">or register with</div>
            </div>
            <div className="row g-2 mt-2">
              <div className="col-sm-6"><a className="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span className="fab fa-google-plus-g me-2" data-fa-transform="grow-8" /> google</a></div>
              <div className="col-sm-6"><a className="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span className="fab fa-facebook-square me-2" data-fa-transform="grow-8" /> facebook</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ============================================*/}{/* <section> begin ============================*/}
    <section className="py-0 overflow-hidden" id="banner" data-bs-theme="light">
      <div className="bg-holder overlay" style={{backgroundImage: 'url(../assets/img/generic/bg-1.jpg)', backgroundPosition: 'center bottom'}} />{/*/.bg-holder*/}
      <div className="container">
        <div className="row flex-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
          <div className="col-md-11 col-lg-8 col-xl-4 pb-7 pb-xl-9 text-center text-xl-start"><a className="btn btn-outline-danger mb-4 fs-10 border-2 rounded-pill" href="#!"><span className="me-2" role="img" aria-label="Gift">🎁</span>Become a pro</a>
            <h1 className="text-white fw-light">Bring <span className="typed-text fw-bold" data-typed-text="[&quot;design&quot;,&quot;beauty&quot;,&quot;elegance&quot;,&quot;perfection&quot;]" /><br />to your webapp</h1>
            <p className="lead text-white opacity-75">With the power of Falcon, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p><a className="btn btn-outline-light border-2 rounded-pill btn-lg mt-4 fs-9 py-2" href="#!">Start building with the falcon<span className="fas fa-play ms-2" data-fa-transform="shrink-6 down-1" /></a>
          </div>
          <div className="col-xl-7 offset-xl-1 align-self-end mt-4 mt-xl-0"><a className="img-landing-banner rounded" href="../index.html"><img className="img-fluid d-dark-none" src="../assets/img/generic/dashboard-alt.jpg" alt /><img className="img-fluid d-light-none" src="../assets/img/generic/dashboard-alt-dark.png" alt /></a></div>
        </div>
      </div>{/* end of .container*/}
    </section>{/* <section> close ============================*/}{/* ============================================*/}
    {/* ============================================*/}{/* <section> begin ============================*/}
    <section className="py-3 bg-body-tertiary shadow-sm">
      <div className="container">
        <div className="row flex-center">
          <div className="col-3 col-sm-auto my-1 my-sm-3 px-x1"><img className="landing-cta-img" height={40} src="../assets/img/logos/b%26w/6.png" alt /></div>
          <div className="col-3 col-sm-auto my-1 my-sm-3 px-x1"><img className="landing-cta-img" height={45} src="../assets/img/logos/b%26w/11.png" alt /></div>
          <div className="col-3 col-sm-auto my-1 my-sm-3 px-x1"><img className="landing-cta-img" height={30} src="../assets/img/logos/b%26w/2.png" alt /></div>
          <div className="col-3 col-sm-auto my-1 my-sm-3 px-x1"><img className="landing-cta-img" height={30} src="../assets/img/logos/b%26w/4.png" alt /></div>
          <div className="col-3 col-sm-auto my-1 my-sm-3 px-x1"><img className="landing-cta-img" height={35} src="../assets/img/logos/b%26w/1.png" alt /></div>
          <div className="col-3 col-sm-auto my-1 my-sm-3 px-x1"><img className="landing-cta-img" height={40} src="../assets/img/logos/b%26w/10.png" alt /></div>
          <div className="col-3 col-sm-auto my-1 my-sm-3 px-x1"><img className="landing-cta-img" height={40} src="../assets/img/logos/b%26w/12.png" alt /></div>
        </div>
      </div>{/* end of .container*/}
    </section>{/* <section> close ============================*/}{/* ============================================*/}
    {/* ============================================*/}{/* <section> begin ============================*/}
    <section>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <h1 className="fs-7 fs-sm-5 fs-md-4">WebApp theme of the future</h1>
            <p className="lead">Built on top of Bootstrap 5, super modular Falcon provides you gorgeous design &amp; streamlined UX for your WebApp.</p>
          </div>
        </div>
        <div className="row flex-center mt-8">
          <div className="col-md col-lg-5 col-xl-4 ps-lg-6"><img className="img-fluid px-6 px-md-0" src="../assets/img/icons/spot-illustrations/50.png" alt /></div>
          <div className="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
            <h5 className="text-danger"><span className="far fa-lightbulb me-2" />PLAN</h5>
            <h3>Blueprint &amp; design </h3>
            <p>With Falcon as your guide, now you have a fine-tuned state of the earth tool to make your wireframe a reality.</p>
          </div>
        </div>
        <div className="row flex-center mt-7">
          <div className="col-md col-lg-5 col-xl-4 pe-lg-6 order-md-2"><img className="img-fluid px-6 px-md-0" src="../assets/img/icons/spot-illustrations/49.png" alt /></div>
          <div className="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
            <h5 className="text-info"> <span className="far fa-object-ungroup me-2" />BUILD</h5>
            <h3>38 Sets of components</h3>
            <p>Build any UI effortlessly with Falcon's robust set of layouts, 38 sets of built-in elements, carefully chosen colors, typography, and css helpers.</p>
          </div>
        </div>
        <div className="row flex-center mt-7">
          <div className="col-md col-lg-5 col-xl-4 ps-lg-6"><img className="img-fluid px-6 px-md-0" src="../assets/img/icons/spot-illustrations/48.png" alt /></div>
          <div className="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
            <h5 className="text-success"><span className="far fa-paper-plane me-2" />DEPLOY</h5>
            <h3>Review and test</h3>
            <p>From IE to iOS, rigorously tested and optimized Falcon will give the near perfect finishing to your webapp; from the landing page to the logout screen.</p>
          </div>
        </div>
      </div>{/* end of .container*/}
    </section>{/* <section> close ============================*/}{/* ============================================*/}
    {/* ============================================*/}{/* <section> begin ============================*/}
    <section className="bg-body-tertiary dark__bg-opacity-50 text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="fs-7 fs-sm-5 fs-md-4">Here's what's in it for you</h1>
            <p className="lead">Things you will get right out of the box with Falcon.</p>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-lg-4">
            <div className="card card-span h-100">
              <div className="card-span-img"><span className="fab fa-sass fs-5 text-info" /></div>
              <div className="card-body pt-6 pb-4">
                <h5 className="mb-2">Bootstrap 5.x</h5>
                <p>Build your webapp with the world's most popular front-end component library along with Falcon's 32 sets of carefully designed elements.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-6 mt-lg-0">
            <div className="card card-span h-100">
              <div className="card-span-img"><span className="fab fa-node-js fs-4 text-success" /></div>
              <div className="card-body pt-6 pb-4">
                <h5 className="mb-2">SCSS &amp; Javascript files</h5>
                <p>With your purchased copy of Falcon, you will get all the uncompressed &amp; documented SCSS and Javascript source code files.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-6 mt-lg-0">
            <div className="card card-span h-100">
              <div className="card-span-img"><span className="fab fa-gulp fs-3 text-danger" /></div>
              <div className="card-body pt-6 pb-4">
                <h5 className="mb-2">Gulp based workflow</h5>
                <p>All the painful or time-consuming tasks in your development workflow such as compiling the SCSS or transpiring the JS are automated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* end of .container*/}
    </section>{/* <section> close ============================*/}{/* ============================================*/}
    {/* ============================================*/}{/* <section> begin ============================*/}
    <section className="bg-200 text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="swiper-container theme-slider" data-swiper="{&quot;autoplay&quot;:true,&quot;spaceBetween&quot;:5,&quot;loop&quot;:true,&quot;loopedSlides&quot;:5,&quot;slideToClickedSlide&quot;:true}">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="px-5 px-sm-6">
                    <p className="fs-sm-8 fs-md-7 fst-italic text-1100">Falcon is the best option if you are looking for a theme built with Bootstrap. On top of that, Falcon's creators and support staff are very brilliant and attentive to users' needs.</p>
                    <p className="fs-9 text-600">- Scott Tolinski, Web Developer</p><img className="w-auto mx-auto" src="../assets/img/logos/google.png" alt height={45} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="px-5 px-sm-6">
                    <p className="fs-sm-8 fs-md-7 fst-italic text-1100">We've become fanboys! Easy to change the modular design, great dashboard UI, enterprise-class support, fast loading time. What else do you want from a Bootstrap Theme?</p>
                    <p className="fs-9 text-600">- Jeff Escalante, Developer</p><img className="w-auto mx-auto" src="../assets/img/logos/netflix.png" alt height={30} />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="px-5 px-sm-6">
                    <p className="fs-sm-8 fs-md-7 fst-italic text-1100">When I first saw Falcon, I was totally blown away by the care taken in the interface. It felt like something that I'd really want to use and something I could see being a true modern replacement to the current class of Bootstrap themes.</p>
                    <p className="fs-9 text-600">- Liam Martens, Designer</p><img className="w-auto mx-auto" src="../assets/img/logos/paypal.png" alt height={45} />
                  </div>
                </div>
              </div>
              <div className="swiper-nav">
                <div className="swiper-button-next swiper-button-white" />
                <div className="swiper-button-prev swiper-button-white"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/* end of .container*/}
    </section>{/* <section> close ============================*/}{/* ============================================*/}
    {/* ============================================*/}{/* <section> begin ============================*/}
    <section className="bg-dark" data-bs-theme="light">
      <div className="bg-holder overlay" style={{backgroundImage: 'url(../assets/img/generic/bg-2.jpg)', backgroundPosition: 'center top'}} />{/*/.bg-holder*/}
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <p className="fs-6 fs-sm-5 text-white">Join our community of 20,000+ developers and content creators on their mission to build better sites and apps.</p><button className="btn btn-outline-light border-2 rounded-pill btn-lg mt-4 fs-9 py-2" type="button">Start your webapp</button>
          </div>
        </div>
      </div>{/* end of .container*/}
    </section>{/* <section> close ============================*/}{/* ============================================*/}
    {/* ============================================*/}{/* <section> begin ============================*/}
    <section className="bg-dark pt-8 pb-4" data-bs-theme="light">
      <div className="container">
        <div className="position-absolute btn-back-to-top bg-dark"><a className="text-600" href="#banner" data-bs-offset-top={0}><span className="fas fa-chevron-up" data-fa-transform="rotate-45" /></a></div>
        <div className="row">
          <div className="col-lg-4">
            <h5 className="text-uppercase text-white opacity-85 mb-3">Our Mission</h5>
            <p className="text-600">Falcon enables front end developers to build custom streamlined user interfaces in a matter of hours, while it gives backend developers all the UI elements they need to develop their web app.And it's rich design can be easily integrated with backends whether your app is based on ruby on rails, laravel, express or any other server side system.</p>
            <div className="icon-group mt-4"><a className="icon-item bg-white text-facebook" href="#!"><span className="fab fa-facebook-f" /></a><a className="icon-item bg-white text-twitter" href="#!"><span className="fab fa-twitter" /></a><a className="icon-item bg-white text-google-plus" href="#!"><span className="fab fa-google-plus-g" /></a><a className="icon-item bg-white text-linkedin" href="#!"><span className="fab fa-linkedin-in" /></a><a className="icon-item bg-white" href="#!"><span className="fab fa-medium-m" /></a></div>
          </div>
          <div className="col ps-lg-6 ps-xl-8">
            <div className="row mt-5 mt-lg-0">
              <div className="col-6 col-md-3">
                <h5 className="text-uppercase text-white opacity-85 mb-3">Company</h5>
                <ul className="list-unstyled">
                  <li className="mb-1"><a className="link-600" href="#!">About</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Contact</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Careers</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Blog</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Terms</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Privacy</a></li>
                  <li><a className="link-600" href="#!">Imprint</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h5 className="text-uppercase text-white opacity-85 mb-3">Product</h5>
                <ul className="list-unstyled">
                  <li className="mb-1"><a className="link-600" href="#!">Features</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Roadmap</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Changelog</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Pricing</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Docs</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">System Status</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Agencies</a></li>
                  <li className="mb-1"><a className="link-600" href="#!">Enterprise</a></li>
                </ul>
              </div>
              <div className="col mt-5 mt-md-0">
                <h5 className="text-uppercase text-white opacity-85 mb-3">From the Blog</h5>
                <ul className="list-unstyled">
                  <li>
                    <h5 className="fs-9 mb-0"><a className="link-600" href="#!"> Interactive graphs and charts</a></h5>
                    <p className="text-600 opacity-50">Jan 15 • 8min read </p>
                  </li>
                  <li>
                    <h5 className="fs-9 mb-0"><a className="link-600" href="#!"> Lifetime free updates</a></h5>
                    <p className="text-600 opacity-50">Jan 5 • 3min read ★</p>
                  </li>
                  <li>
                    <h5 className="fs-9 mb-0"><a className="link-600" href="#!"> Merry Christmas From us</a></h5>
                    <p className="text-600 opacity-50">Dec 25 • 2min read</p>
                  </li>
                  <li>
                    <h5 className="fs-9 mb-0"><a className="link-600" href="#!"> The New Falcon Theme</a></h5>
                    <p className="text-600 opacity-50">Dec 23 • 10min read </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{/* end of .container*/}
    </section>{/* <section> close ============================*/}{/* ============================================*/}
    {/* ============================================*/}{/* <section> begin ============================*/}
    <section className="py-0 bg-dark" data-bs-theme="light">
      <div>
        <hr className="my-0 text-600 opacity-25" />
        <div className="container py-3">
          <div className="row justify-content-between fs-10">
            <div className="col-12 col-sm-auto text-center">
              <p className="mb-0 text-600 opacity-85">Thank you for creating with Falcon <span className="d-none d-sm-inline-block">| </span><br className="d-sm-none" /> 2023 © <a className="text-white opacity-85" href="https://themewagon.com/">Themewagon</a></p>
            </div>
            <div className="col-12 col-sm-auto text-center">
              <p className="mb-0 text-600 opacity-85">v3.19.0</p>
            </div>
          </div>
        </div>
      </div>{/* end of .container*/}
    </section>{/* <section> close ============================*/}{/* ============================================*/}
    <div className="modal fade" id="authentication-modal" tabIndex={-1} role="dialog" aria-labelledby="authentication-modal-label" aria-hidden="true">
      <div className="modal-dialog mt-6" role="document">
        <div className="modal-content border-0">
          <div className="modal-header px-5 position-relative modal-shape-header bg-shape">
            <div className="position-relative z-1">
              <h4 className="mb-0 text-white" id="authentication-modal-label">Register</h4>
              <p className="fs-10 mb-0 text-white">Please create your free Falcon account</p>
            </div><button className="btn-close position-absolute top-0 end-0 mt-2 me-2" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body py-4 px-5">
            <form>
              <div className="mb-3"><label className="form-label" htmlFor="modal-auth-name">Name</label><input className="form-control" type="text" autoComplete="on" id="modal-auth-name" /></div>
              <div className="mb-3"><label className="form-label" htmlFor="modal-auth-email">Email address</label><input className="form-control" type="email" autoComplete="on" id="modal-auth-email" /></div>
              <div className="row gx-2">
                <div className="mb-3 col-sm-6"><label className="form-label" htmlFor="modal-auth-password">Password</label><input className="form-control" type="password" autoComplete="on" id="modal-auth-password" /></div>
                <div className="mb-3 col-sm-6"><label className="form-label" htmlFor="modal-auth-confirm-password">Confirm Password</label><input className="form-control" type="password" autoComplete="on" id="modal-auth-confirm-password" /></div>
              </div>
              <div className="form-check"><input className="form-check-input" type="checkbox" id="modal-auth-register-checkbox" /><label className="form-label" htmlFor="modal-auth-register-checkbox">I accept the <a href="#!">terms </a>and <a className="white-space-nowrap" href="#!">privacy policy</a></label></div>
              <div className="mb-3"><button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Register</button></div>
            </form>
            <div className="position-relative mt-5">
              <hr />
              <div className="divider-content-center">or register with</div>
            </div>
            <div className="row g-2 mt-2">
              <div className="col-sm-6"><a className="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span className="fab fa-google-plus-g me-2" data-fa-transform="grow-8" /> google</a></div>
              <div className="col-sm-6"><a className="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span className="fab fa-facebook-square me-2" data-fa-transform="grow-8" /> facebook</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>{/* ===============================================*/}{/*    End of Main Content*/}{/* ===============================================*/}
  <div className="offcanvas offcanvas-end settings-panel border-0" id="settings-offcanvas" tabIndex={-1} aria-labelledby="settings-offcanvas">
    <div className="offcanvas-header settings-panel-header bg-shape">
      <div className="z-1 py-1">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="text-white mb-0 me-2"><span className="fas fa-palette me-2 fs-9" />Settings</h5><button className="btn btn-primary btn-sm rounded-pill mt-0 mb-0" data-theme-control="reset" style={{fontSize: 12}}> <span className="fas fa-redo-alt me-1" data-fa-transform="shrink-3" />Reset</button>
        </div>
        <p className="mb-0 fs-10 text-white opacity-75"> Set your own customized style</p>
      </div>
      <div className="z-1" data-bs-theme="dark"><button className="btn-close z-1 mt-0" type="button" data-bs-dismiss="offcanvas" aria-label="Close" /></div>
    </div>
    <div className="offcanvas-body scrollbar-overlay px-x1 h-100" id="themeController">
      <h5 className="fs-9">Color Scheme</h5>
      <p className="fs-10">Choose the perfect color mode for your app.</p>
      <div className="btn-group d-block w-100 btn-group-navbar-style">
        <div className="row gx-2">
          <div className="col-4"><input className="btn-check" id="themeSwitcherLight" name="theme-color" type="radio" defaultValue="light" data-theme-control="theme" /><label className="btn d-inline-block btn-navbar-style fs-10" htmlFor="themeSwitcherLight"> <span className="hover-overlay mb-2 rounded d-block"><img className="img-fluid img-prototype mb-0" src="../assets/img/generic/falcon-mode-default.jpg" alt /></span><span className="label-text">Light</span></label></div>
          <div className="col-4"><input className="btn-check" id="themeSwitcherDark" name="theme-color" type="radio" defaultValue="dark" data-theme-control="theme" /><label className="btn d-inline-block btn-navbar-style fs-10" htmlFor="themeSwitcherDark"> <span className="hover-overlay mb-2 rounded d-block"><img className="img-fluid img-prototype mb-0" src="../assets/img/generic/falcon-mode-dark.jpg" alt /></span><span className="label-text"> Dark</span></label></div>
          <div className="col-4"><input className="btn-check" id="themeSwitcherAuto" name="theme-color" type="radio" defaultValue="auto" data-theme-control="theme" /><label className="btn d-inline-block btn-navbar-style fs-10" htmlFor="themeSwitcherAuto"> <span className="hover-overlay mb-2 rounded d-block"><img className="img-fluid img-prototype mb-0" src="../assets/img/generic/falcon-mode-auto.jpg" alt /></span><span className="label-text"> Auto</span></label></div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-start"><img className="me-2" src="../assets/img/icons/left-arrow-from-left.svg" width={20} alt />
          <div className="flex-1">
            <h5 className="fs-9">RTL Mode</h5>
            <p className="fs-10 mb-0">Switch your language direction </p><a className="fs-10" href="../documentation/customization/configuration.html">RTL Documentation</a>
          </div>
        </div>
        <div className="form-check form-switch"><input className="form-check-input ms-0" id="mode-rtl" type="checkbox" data-theme-control="isRTL" /></div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-start"><img className="me-2" src="../assets/img/icons/arrows-h.svg" width={20} alt />
          <div className="flex-1">
            <h5 className="fs-9">Fluid Layout</h5>
            <p className="fs-10 mb-0">Toggle container layout system </p><a className="fs-10" href="../documentation/customization/configuration.html">Fluid Documentation</a>
          </div>
        </div>
        <div className="form-check form-switch"><input className="form-check-input ms-0" id="mode-fluid" type="checkbox" data-theme-control="isFluid" /></div>
      </div>
      <hr />
      <div className="d-flex align-items-start"><img className="me-2" src="../assets/img/icons/paragraph.svg" width={20} alt />
        <div className="flex-1">
          <h5 className="fs-9 d-flex align-items-center">Navigation Position</h5>
          <p className="fs-10 mb-2">Select a suitable navigation system for your web application </p>
          <div><select className="form-select form-select-sm" aria-label="Navbar position" data-theme-control="navbarPosition">
              <option value="vertical">Vertical</option>
              <option value="top">Top</option>
              <option value="combo">Combo</option>
              <option value="double-top">Double Top</option>
            </select></div>
        </div>
      </div>
      <hr />
      <h5 className="fs-9 d-flex align-items-center">Vertical Navbar Style</h5>
      <p className="fs-10 mb-0">Switch between styles for your vertical navbar </p>
      <p> <a className="fs-10" href="../modules/components/navs-and-tabs/vertical-navbar.html#navbar-styles">See Documentation</a></p>
      <div className="btn-group d-block w-100 btn-group-navbar-style">
        <div className="row gx-2">
          <div className="col-6"><input className="btn-check" id="navbar-style-transparent" type="radio" name="navbarStyle" defaultValue="transparent" data-theme-control="navbarStyle" /><label className="btn d-block w-100 btn-navbar-style fs-10" htmlFor="navbar-style-transparent"> <img className="img-fluid img-prototype" src="../assets/img/generic/default.png" alt /><span className="label-text"> Transparent</span></label></div>
          <div className="col-6"><input className="btn-check" id="navbar-style-inverted" type="radio" name="navbarStyle" defaultValue="inverted" data-theme-control="navbarStyle" /><label className="btn d-block w-100 btn-navbar-style fs-10" htmlFor="navbar-style-inverted"> <img className="img-fluid img-prototype" src="../assets/img/generic/inverted.png" alt /><span className="label-text"> Inverted</span></label></div>
          <div className="col-6"><input className="btn-check" id="navbar-style-card" type="radio" name="navbarStyle" defaultValue="card" data-theme-control="navbarStyle" /><label className="btn d-block w-100 btn-navbar-style fs-10" htmlFor="navbar-style-card"> <img className="img-fluid img-prototype" src="../assets/img/generic/card.png" alt /><span className="label-text"> Card</span></label></div>
          <div className="col-6"><input className="btn-check" id="navbar-style-vibrant" type="radio" name="navbarStyle" defaultValue="vibrant" data-theme-control="navbarStyle" /><label className="btn d-block w-100 btn-navbar-style fs-10" htmlFor="navbar-style-vibrant"> <img className="img-fluid img-prototype" src="../assets/img/generic/vibrant.png" alt /><span className="label-text"> Vibrant</span></label></div>
        </div>
      </div>
      <div className="text-center mt-5"><img className="mb-4" src="../assets/img/icons/spot-illustrations/47.png" alt width={120} />
        <h5>Like What You See?</h5>
        <p className="fs-10">Get Falcon now and create beautiful dashboards with hundreds of widgets.</p><a className="mb-3 btn btn-primary" href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/" target="_blank">Purchase</a>
      </div>
    </div>
  </div><a className="card setting-toggle" href="#settings-offcanvas" data-bs-toggle="offcanvas">
    <div className="card-body d-flex align-items-center py-md-2 px-2 py-1">
      <div className="bg-primary-subtle position-relative rounded-start" style={{height: 34, width: 28}}>
        <div className="settings-popover"><span className="ripple"><span className="fa-spin position-absolute all-0 d-flex flex-center"><span className="icon-spin position-absolute all-0 d-flex flex-center"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7369 12.3941L19.1989 12.1065C18.4459 11.7041 18.0843 10.8487 18.0843 9.99495C18.0843 9.14118 18.4459 8.28582 19.1989 7.88336L19.7369 7.59581C19.9474 7.47484 20.0316 7.23291 19.9474 7.03131C19.4842 5.57973 18.6843 4.28943 17.6738 3.20075C17.5053 3.03946 17.2527 2.99914 17.0422 3.12011L16.393 3.46714C15.6883 3.84379 14.8377 3.74529 14.1476 3.3427C14.0988 3.31422 14.0496 3.28621 14.0002 3.25868C13.2568 2.84453 12.7055 2.10629 12.7055 1.25525V0.70081C12.7055 0.499202 12.5371 0.297594 12.2845 0.257272C10.7266 -0.105622 9.16879 -0.0653007 7.69516 0.257272C7.44254 0.297594 7.31623 0.499202 7.31623 0.70081V1.23474C7.31623 2.09575 6.74999 2.8362 5.99824 3.25599C5.95774 3.27861 5.91747 3.30159 5.87744 3.32493C5.15643 3.74527 4.26453 3.85902 3.53534 3.45302L2.93743 3.12011C2.72691 2.99914 2.47429 3.03946 2.30587 3.20075C1.29538 4.28943 0.495411 5.57973 0.0322686 7.03131C-0.051939 7.23291 0.0322686 7.47484 0.242788 7.59581L0.784376 7.8853C1.54166 8.29007 1.92694 9.13627 1.92694 9.99495C1.92694 10.8536 1.54166 11.6998 0.784375 12.1046L0.242788 12.3941C0.0322686 12.515 -0.051939 12.757 0.0322686 12.9586C0.495411 14.4102 1.29538 15.7005 2.30587 16.7891C2.47429 16.9504 2.72691 16.9907 2.93743 16.8698L3.58669 16.5227C4.29133 16.1461 5.14131 16.2457 5.8331 16.6455C5.88713 16.6767 5.94159 16.7074 5.99648 16.7375C6.75162 17.1511 7.31623 17.8941 7.31623 18.7552V19.2891C7.31623 19.4425 7.41373 19.5959 7.55309 19.696C7.64066 19.7589 7.74815 19.7843 7.85406 19.8046C9.35884 20.0925 10.8609 20.0456 12.2845 19.7729C12.5371 19.6923 12.7055 19.4907 12.7055 19.2891V18.7346C12.7055 17.8836 13.2568 17.1454 14.0002 16.7312C14.0496 16.7037 14.0988 16.6757 14.1476 16.6472C14.8377 16.2446 15.6883 16.1461 16.393 16.5227L17.0422 16.8698C17.2527 16.9907 17.5053 16.9504 17.6738 16.7891C18.7264 15.7005 19.4842 14.4102 19.9895 12.9586C20.0316 12.757 19.9474 12.515 19.7369 12.3941ZM10.0109 13.2005C8.1162 13.2005 6.64257 11.7893 6.64257 9.97478C6.64257 8.20063 8.1162 6.74905 10.0109 6.74905C11.8634 6.74905 13.3792 8.20063 13.3792 9.97478C13.3792 11.7893 11.8634 13.2005 10.0109 13.2005Z" fill="#2A7BE4" /></svg></span></span></span></div>
      </div><small className="text-uppercase text-primary fw-bold bg-primary-subtle py-2 pe-2 ps-1 rounded-end">customize</small>
    </div>
  </a>
  {/* ===============================================*/}{/*    JavaScripts*/}{/* ===============================================*/}
</div>

    )
  }
}
