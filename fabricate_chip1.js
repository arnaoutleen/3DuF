intialize depthMap, solidObjectList, drillList, bordersList , M;

//this is for the F parts list: RNAExtractionChamber, ports p1,p2,p2,p4, valves c1 through c6
class F {
  constructor(DFMClass) {
    this.DFMClass = DFMClass;
  }
  constructor(Depth) {
    this.depth = Depth;
  }
}
RNAExtractionChamber = new F("RNAExtractionChamber");
p1=new F("p1");
p2=new F("p2");
p3=new F("p3");
p4=new F("p4");
c1=new F("c1");
c2=new F("c2");
c3=new F("c3");
c4=new F("c4");
c5=new F("c5");
c6=new F("c6");
// define drill profile classes for manufacturing 
RNAExtractionChamber.DFMClass="XYZ"
p1.DFMClass="Z"; p2.DFMClass="Z"; p3.DFMClass="Z"; p4.DFMClass="Z";
c1.DFMClass="XY"; c2.DFMClass="XY"; c3.DFMClass="XY"; c4.DFMClass="XY"; c5.DFMClass="XY"; c6.DFMClass="XY";
// define depths of parts
RNAExtractionChamber.depth=1000;
p1.depth=250; p2.depth=250; p3.depth=250; p4.depth=250;
c1.depth=300; c2.depth=300; c3.depth=300; c4.depth=300; c5.depth=300; c6.depth=300;
//make a list of F parts
F_list=[RNAExtractionChamber, p1, p2, p3, p4, c1, c2, c3, c4, c5, c6];
//assuming solidObjectList, drillList, bordersList, and M exist already, let the code loop
// through each element f in the F list of geometric features stated above. Then it will assign it to 
// any of the manufacturing methods (solid Object, Drill or Border list) because of its depth
for (f in F) do
if f.DFMClass = ”XY” then
featureList;
depth ← f.depth;
if depthMap.keyexists(depth) then
featureList ← depthMap.value(depth);
end
else
initialize featureList;
depthM ap[depth] ← featureList;
end
featureList.append(f);
end
else if f.DFMClass = ”XYZ” then
solidObjectList.append(f);
end
else if f.DFMClass = ”Z” then
drillList.append(f);
end
else if f.DFMClass = ”EDGE” then
bordersList.append(f);
end
M.layers ← depthMap.values;
M.borders ← bordersList;
M.3Dobjects ← solidObjectList;
M.drills ← drillList;
end
