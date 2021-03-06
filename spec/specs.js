describe ("leapYear", function() {
  it ("is false for a year that is not divisible by 4, 100, or 400", function(){
    expect (leapYear(1993)).to.equal(false);
  });

  it("is true for years divisible by 4", function(){
    expect(leapYear(2004)).to.equal(true);
  });

  it("is false for years divisible by 100", function(){
    expect(leapYear(1900)).to.equal(false);
  });

  it("is true for years divisible by 400", function(){
    expect(leapYear(2400)).to.equal(true);
  });

  it("is true for non-numerical values", function(){
    expect(leapYear("NaN")).to.equal(false);
  });
});
