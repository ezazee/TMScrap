import React from "react";

const Topnav = () => {
  return (
    <>
      <div className="fixed inset-x-0 top-0 mt-3.5 h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px]">
        <div className="top-bar absolute left-0 xl:left-3.5 right-0 h-full mx-5 group before:content-[''] before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur">
          <div className="box group-[.top-bar--active]:box container flex h-full w-full items-center border-transparent bg-transparent shadow-none transition-[padding,background-color,border-color] duration-300 ease-in-out group-[.top-bar--active]:border-transparent group-[.top-bar--active]:bg-transparent group-[.top-bar--active]:bg-gradient-to-r group-[.top-bar--active]:from-theme-1 group-[.top-bar--active]:to-theme-2 group-[.top-bar--active]:px-5">
            <div className="flex items-center gap-1 xl:hidden">
              <a
                className="open-mobile-menu rounded-full p-2 text-white hover:bg-white/5"
                href="#"
              >
                <i
                  data-tw-merge=""
                  data-lucide="align-justify"
                  className="stroke-[1] h-[18px] w-[18px]"
                />
              </a>
              <a
                className="rounded-full p-2 text-white hover:bg-white/5"
                data-tw-toggle="modal"
                data-tw-target="#quick-search"
                href="javascript:;"
              >
                <i
                  data-tw-merge=""
                  data-lucide="search"
                  className="stroke-[1] h-[18px] w-[18px]"
                />
              </a>
            </div>
            {/* BEGIN: Breadcrumb */}
            <nav
              aria-label="breadcrumb"
              className="flex hidden flex-1 xl:block"
            >
              <ol className="flex items-center text-theme-1 dark:text-slate-300 text-white/90">
                <li className="">
                  <a href="#">App</a>
                </li>
                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white">
                  <a href="#">Dashboards</a>
                </li>
                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-white/70">
                  <a href="#">Analytics</a>
                </li>
              </ol>
            </nav>
            {/* END: Breadcrumb */}
            {/* BEGIN: Search */}
            <div
              className="relative hidden flex-1 justify-center xl:flex"
              data-tw-toggle="modal"
              data-tw-target="#quick-search"
            >
              <div className="flex w-[350px] cursor-pointer items-center rounded-[0.5rem] border border-transparent bg-white/[0.12] px-3.5 py-2 text-white/60 transition-colors duration-300 hover:bg-white/[0.15] hover:duration-100">
                <i
                  data-tw-merge=""
                  data-lucide="search"
                  className="stroke-[1] h-[18px] w-[18px]"
                />
                <div className="ml-2.5 mr-auto">Quick search...</div>
                <div>⌘K</div>
              </div>
            </div>
            <div
              id="quick-search"
              aria-hidden="true"
              tabIndex={-1}
              className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 overflow-y-hidden z-[60] [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.1s]"
            >
              <div className="relative mx-auto my-2 w-[95%] scale-95 transition-transform group-[.show]:scale-100 sm:mt-40 sm:w-[600px] lg:w-[700px]">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex w-12 items-center justify-center">
                    <i
                      data-tw-merge=""
                      data-lucide="search"
                      className="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500"
                    />
                  </div>
                  <input
                    data-tw-merge=""
                    type="text"
                    placeholder="Quick search..."
                    className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full border-slate-200 placeholder:text-slate-400/90 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-lg border-0 py-3.5 pl-12 pr-14 text-base shadow-lg focus:ring-0"
                  />
                  <div className="absolute inset-y-0 right-0 flex w-14 items-center">
                    <div className="mr-auto rounded-[0.4rem] border bg-slate-100 px-2 py-1 text-xs text-slate-500/80">
                      ESC
                    </div>
                  </div>
                </div>
                <div className="global-search global-search--show-result group relative z-10 mt-1 max-h-[468px] overflow-y-auto rounded-lg bg-white pb-1 shadow-lg sm:max-h-[615px]">
                  <div className="flex flex-col items-center justify-center pb-28 pt-20 group-[.global-search--show-result]:hidden">
                    <i
                      data-tw-merge=""
                      data-lucide="search-x"
                      className="h-20 w-20 fill-theme-1/5 stroke-[0.5] text-theme-1/20"
                    />
                    <div className="mt-5 text-xl font-medium">
                      No result found
                    </div>
                    <div className="mt-3 w-2/3 text-center leading-relaxed text-slate-500">
                      No results found for
                      <span className="global-search__keyword font-medium italic" />
                      . Please try a different search term or check your
                      spelling.
                    </div>
                  </div>
                  <div className="hidden group-[.global-search--show-result]:block">
                    <div className="px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Start your search here...
                        </div>
                      </div>
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="users2"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Users
                        </a>
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="building2"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Departments
                        </a>
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="kanban-square"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Products
                        </a>
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href="#"
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="mail-check"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Mails
                        </a>
                        <div
                          data-tw-merge=""
                          data-tw-placement="bottom-end"
                          className="dropdown relative"
                        >
                          <a
                            data-tw-toggle="dropdown"
                            aria-expanded="false"
                            href="javascript:;"
                            className="cursor-pointer flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          >
                            More
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-down"
                              className="-ml-0.5 h-4 w-4 stroke-[1.3]"
                            />
                          </a>
                          <div
                            data-transition=""
                            data-selector=".show"
                            data-enter="transition-all ease-linear duration-150"
                            data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                            data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                            data-leave="transition-all ease-linear duration-150"
                            data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                            data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                            className="dropdown-menu absolute z-[9999] hidden"
                          >
                            <div
                              data-tw-merge=""
                              className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                            >
                              <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                <i
                                  data-tw-merge=""
                                  data-lucide="map"
                                  className="stroke-[1] mr-2 h-4 w-4"
                                />
                                Locations
                              </a>
                              <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                <i
                                  data-tw-merge=""
                                  data-lucide="file-check"
                                  className="stroke-[1] mr-2 h-4 w-4"
                                />
                                Projects
                              </a>
                              <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                <i
                                  data-tw-merge=""
                                  data-lucide="printer"
                                  className="stroke-[1] mr-2 h-4 w-4"
                                />
                                Devices
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-dashed px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Users
                        </div>
                        <a className="ml-auto text-xs text-slate-500" href="#">
                          See All
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-col gap-1">
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href="#"
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Denzel Washington
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Atlanta, USA
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href="#"
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user2-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Meryl Streep
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Los Angeles, USA
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href="#"
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user6-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Jennifer Lawrence
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Miami, USA
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="border-t border-dashed px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Departments
                        </div>
                        <a className="ml-auto text-xs text-slate-500" href="#">
                          See All
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-col gap-1">
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href="#"
                        >
                          <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                            <i
                              data-tw-merge=""
                              data-lucide="hotel"
                              className="h-3.5 w-3.5 stroke-[1.3] text-theme-1"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Quality Assurance
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Falkland Islands
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href="#"
                        >
                          <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                            <i
                              data-tw-merge=""
                              data-lucide="hotel"
                              className="h-3.5 w-3.5 stroke-[1.3] text-theme-1"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Human Resources
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Venezuela
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href="#"
                        >
                          <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                            <i
                              data-tw-merge=""
                              data-lucide="hotel"
                              className="h-3.5 w-3.5 stroke-[1.3] text-theme-1"
                            />
                          </div>
                          <div className="truncate font-medium">Sales</div>
                          <div className="hidden text-slate-500 sm:block">
                            Saint Kitts and Nevis
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="border-t border-dashed px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Products
                        </div>
                        <a className="ml-auto text-xs text-slate-500" href="#">
                          See All
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-col gap-1">
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href="#"
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/products/product1-400x400.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Wireless Gaming Mouse
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Clothing
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href="#"
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/products/product4-400x400.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Smart Home Security Camera
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Jewelry
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href="#"
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/products/product1-400x400.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Wireless Gaming Mouse
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Toys &amp; Games
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Search */}
            {/* BEGIN: Notification & User Menu */}
            <div className="flex flex-1 items-center">
              <div className="ml-auto flex items-center gap-1">
                <a
                  className="rounded-full p-2 text-white hover:bg-white/5"
                  data-tw-toggle="modal"
                  data-tw-target="#activities-panel"
                  href="javascript:;"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="layout-grid"
                    className="stroke-[1] h-[18px] w-[18px]"
                  />
                </a>
                <a
                  className="request-full-screen rounded-full p-2 text-white hover:bg-white/5"
                  href="#"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="expand"
                    className="stroke-[1] h-[18px] w-[18px]"
                  />
                </a>
                <a
                  className="rounded-full p-2 text-white hover:bg-white/5"
                  data-tw-toggle="modal"
                  data-tw-target="#notifications-panel"
                  href="javascript:;"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="bell"
                    className="stroke-[1] h-[18px] w-[18px]"
                  />
                </a>
              </div>
              <div
                data-tw-merge=""
                data-tw-placement="bottom-end"
                className="dropdown relative ml-5"
              >
                <button
                  data-tw-toggle="dropdown"
                  aria-expanded="false"
                  className="cursor-pointer image-fit h-[36px] w-[36px] overflow-hidden rounded-full border-[3px] border-white/[0.15]"
                >
                  <img
                    src="/images/users/user7-50x50.jpg"
                    alt="Tailwise - Admin Dashboard Template"
                  />
                </button>
                <div
                  data-transition=""
                  data-selector=".show"
                  data-enter="transition-all ease-linear duration-150"
                  data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                  data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                  data-leave="transition-all ease-linear duration-150"
                  data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                  data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                  className="dropdown-menu absolute z-[9999] hidden"
                >
                  <div
                    data-tw-merge=""
                    className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-1 w-56"
                  >
                    <a
                      data-tw-toggle="modal"
                      data-tw-target="#switch-account"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="toggle-left"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Switch Account
                    </a>
                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400" />
                    <a
                      href="echo-settings-connected-services.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="settings"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Connected Services
                    </a>
                    <a
                      href="echo-settings-email-settings.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="inbox"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Email Settings
                    </a>
                    <a
                      href="echo-settings-security.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="lock"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Reset Password
                    </a>
                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400" />
                    <a
                      href="echo-settings.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="users"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Profile Info
                    </a>
                    <a
                      href="echo-login.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="power"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                data-tw-backdrop=""
                aria-hidden="true"
                tabIndex={-1}
                id="activities-panel"
                className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
              >
                <div
                  data-tw-merge=""
                  className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"
                >
                  <a
                    className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14"
                    data-tw-dismiss="modal"
                    href="javascript:;"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="x"
                      className="stroke-[1] h-8 w-8"
                    />
                  </a>
                  <div
                    data-tw-merge=""
                    className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-6 py-5"
                  >
                    <h2 className="mr-auto text-base font-medium">
                      Latest Activities
                    </h2>
                  </div>
                  <div data-tw-merge="" className="overflow-y-auto flex-1 p-0">
                    <div className="flex flex-col gap-3.5 px-5 py-3">
                      <div className="relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:ml-[14px] before:w-px before:bg-slate-200/60 before:content-[''] before:dark:bg-darkmode-400">
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="#">
                              Uploaded presentations
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Added slides for the team meeting
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 success">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Completed</span>
                              </span>
                            </div>
                            <div className="my-3.5 grid grid-cols-1 gap-4">
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory" />
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    presentation1.pptx
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    5.2MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory" />
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    presentation2.ppt
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    4.5MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Mon Apr 2022
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="#">
                              Received a friend request
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Friend request from John
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 primary">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">New</span>
                              </span>
                            </div>
                            <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                              <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="/images/projects/project3-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="/images/projects/project8-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="/images/projects/project4-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Tue Jun 2022
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="#">
                              Updated profile picture
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Changed profile photo
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 primary">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Success</span>
                              </span>
                            </div>
                            <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                              <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="/images/projects/project9-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="/images/projects/project9-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="/images/projects/project2-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Sat Aug 2022
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="#">
                              Logged out
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Signed out from the dashboard
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 warning">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Info</span>
                              </span>
                            </div>
                            <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                              <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="/images/projects/project10-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="/images/projects/project3-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="/images/projects/project5-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Tue Apr 2020
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="#">
                              Added a new contact
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Added a new contact, Sarah
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 info">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Success</span>
                              </span>
                            </div>
                            <div className="my-3.5 grid grid-cols-1 gap-4">
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory" />
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    spreadsheet.xlsx
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    3.4MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Sun Jul 2022
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                data-tw-backdrop=""
                aria-hidden="true"
                tabIndex={-1}
                id="notifications-panel"
                className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
              >
                <div
                  data-tw-merge=""
                  className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"
                >
                  <a
                    className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14"
                    data-tw-dismiss="modal"
                    href="javascript:;"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="x"
                      className="stroke-[1] h-8 w-8"
                    />
                  </a>
                  <div
                    data-tw-merge=""
                    className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-6 py-5"
                  >
                    <h2 className="mr-auto text-base font-medium">
                      Notifications
                    </h2>
                    <button
                      data-tw-merge=""
                      className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 hidden sm:flex"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="shield-check"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Mark all as read
                    </button>
                  </div>
                  <div data-tw-merge="" className="overflow-y-auto flex-1 p-0">
                    <div className="flex flex-col gap-0.5 p-3">
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Logged out</div>
                          <div className="mt-0.5 text-slate-500">
                            Signed out from the dashboard
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project2-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project5-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Thu May 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded video files
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Shared video tutorials
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Wed Aug 2022
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40" />
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Posted a status update
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Shared thoughts on the project
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Tue Feb 2022
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40" />
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded presentations
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Added slides for the team meeting
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Tue Jun 2021
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40" />
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Updated profile picture
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Changed profile photo
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project2-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project9-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sun Nov 2021
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Received a friend request
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Friend request from John
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project8-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project6-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project7-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Thu Jun 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Task completed: Review Project Proposal
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Reviewed and provided feedback
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project9-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project5-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project7-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sun Dec 2021
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Logged in successfully
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Accessed the dashboard
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project8-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project5-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project9-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Mon Sep 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Received 5 new emails
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Inbox updates
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Tue Aug 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Added a new contact</div>
                          <div className="mt-0.5 text-slate-500">
                            Added a new contact, Sarah
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Thu Jul 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Uploaded images</div>
                          <div className="mt-0.5 text-slate-500">
                            Added project screenshots
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project7-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project4-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="/images/projects/project6-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Wed Jan 2021
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Uploaded code files</div>
                          <div className="mt-0.5 text-slate-500">
                            Added new code modules
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sun Jul 2022
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40" />
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded audio recordings
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Recorded podcast episodes
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Thu Dec 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Uploaded documents</div>
                          <div className="mt-0.5 text-slate-500">
                            Uploaded important project documents
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Wed Mar 2021
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40" />
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href="#"
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded a spreadsheet
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Added financial data for Q3
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Mon Jul 2021
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-tw-backdrop=""
              aria-hidden="true"
              tabIndex={-1}
              id="switch-account"
              className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
            >
              <div
                data-tw-merge=""
                className="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]"
              >
                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400 h-14 justify-center">
                  <h2 className="text-base font-medium">Switch Account</h2>
                </div>
                <div data-tw-merge="" className="p-5 px-2.5 pb-4 pt-3.5">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="/images/users/user5-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Brad Pitt</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          brad.pitt@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          defaultChecked
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-0"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10" />
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="/images/users/user9-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Denzel Washington</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          denzel.washington@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-1"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10" />
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="/images/users/user6-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Jennifer Lawrence</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          jennifer.lawrence@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-2"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10" />
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="/images/users/user7-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Johnny Depp</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          johnny.depp@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-3"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10" />
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="/images/users/user2-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Meryl Streep</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          meryl.streep@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-4"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 text-right border-t border-slate-200/60 dark:border-darkmode-400 flex h-14 items-center justify-center text-center">
                  <a className="-mt-1 block text-primary" href="#">
                    Login into an Existing Account
                  </a>
                </div>
              </div>
            </div>
            {/* END: Notification & User Menu */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
