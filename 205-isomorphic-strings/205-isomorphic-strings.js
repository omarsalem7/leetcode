/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  mapS = new Map();
  mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!mapS.has(s[i])) {
      mapS.set(s[i], t[i]);
    } else {
      if (!(mapS.get(s[i]) == t[i])) {
        return false;
      }
    }

    if (!mapT.has(t[i])) {
      mapT.set(t[i], s[i]);
    } else {
      if (!(mapT.get(t[i]) == s[i])) {
        return false;
      }
    }
  }
  return true;
};