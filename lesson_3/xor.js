function isXor(boolean1, boolean2) {
  return !!((boolean1 && !boolean2) || (!boolean1 && boolean2));
}