/**
 * @class Navigation
 * @description Provide navigation dropdown functionality on mobile
 * @version 1.0
 * @author Yari Morcus
 * @property {Element} #toggleButton - toggle button
 * @property {Element} #navigation - container of navigation items
 */
class Navigation {
  #toggleButton = document.querySelector('#js-toggle');
  #navigation = document.querySelector('#js-menu');

  constructor() {
    this.#toggleButton.addEventListener(
      'click',
      this.#toggleNavigation.bind(this)
    );
  }

  /**
   * toggleNavigation
   *
   * Acts as a controller when toggle button is pressed
   */
  #toggleNavigation() {
    // Show/hide cross icon
    this.#toggleButton.classList.toggle('is-expanded');

    // Indicate whether navigation is expanded or not
    this.#toggleAriaExpanded();

    // Show/hide navigation
    this.#navigation.classList.toggle('is-active');
  }

  #toggleAriaExpanded() {
    const expanded =
      this.#toggleButton.getAttribute('aria-expanded') === 'false';

    this.#toggleButton.setAttribute('aria-expanded', expanded);
  }
}

new Navigation();
