var assert = chai.assert;

describe("Path rounding", function() {

  it("should work", function() {
    assert.equal(new SVGPathData(
      'M137.5 140C137.5 140 129.86983 107.04527999999999 120.28202 94.914299C120.28202 94.914299 111.67409 87.871064 107.37013999999999 87.284128C103.06618 86.69719099999999 76.261082 86.11025599999999 76.261082 86.11025599999999L68.239383 76.289234H64.522357L63.348485 60.47904L66.870103 56.762015999999996L68.434791 46.979513L67.847854 42.479433H66.087046C66.087046 42.479433 64.948119 29.761523 65.109294 28.391533000000003C65.269757 27.022253000000003 60.197715 12.206213000000002 47.48052000000001 10.215053000000001C34.76333000000001 8.223173000000001 12.446920000000006 20.723563 12.446920000000006 20.723563L13.652170000000012 42.282593L15.999920000000003 48.935013L14.63064 49.326543C14.63064 49.326543 14.826040000000006 53.043563 16.391449999999992 55.586716C16.391449999999992 55.586716 18.543779999999998 66.34769 24.021619999999984 66.543098L28.326289999999986 79.064881L32.04331999999998 83.174148L34.97799999999998 91.78207L20.30458999999999 109.587L19.130719999999997 119.95644C19.130719999999997 119.95644 10.603379999999987 127.56165 12.812780000000004 139.99858H137.5z'
    ).round(10e12).encode(),
      'M137.5 140C137.5 140 129.86983 107.04528 120.28202 94.914299C120.28202 94.914299 111.67409 87.871064 107.37014 87.284128C103.06618 86.697191 76.261082 86.110256 76.261082 86.110256L68.239383 76.289234H64.522357L63.348485 60.47904L66.870103 56.762016L68.434791 46.979513L67.847854 42.479433H66.087046C66.087046 42.479433 64.948119 29.761523 65.109294 28.391533C65.269757 27.022253 60.197715 12.206213 47.48052 10.215053C34.76333 8.223173 12.44692 20.723563 12.44692 20.723563L13.65217 42.282593L15.99992 48.935013L14.63064 49.326543C14.63064 49.326543 14.82604 53.043563 16.39145 55.586716C16.39145 55.586716 18.54378 66.34769 24.02162 66.543098L28.32629 79.064881L32.04332 83.174148L34.978 91.78207L20.30459 109.587L19.13072 119.95644C19.13072 119.95644 10.60338 127.56165 12.81278 139.99858H137.5z');
  });

});

