/**
 * Return an ID of an organization depending on current URL.
 * For example:
 * baumanka.pashinin.com -> 1
 * localhost -> 1
 * @returns {int}
 */
export default (relay = true) => {
  let id = 1;
  const n = 'OrganizationNode';
  const h = document.location.hostname;
  if (h) id = 1;
  // console.log(h);
  if (relay) return btoa(`${n}:${id}`);
  return id;
};
