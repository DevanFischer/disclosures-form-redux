export const getCgmDisclosures = (user) => {
  let payload = { Token: user.token, PackageID: user.package_id, ResidenceState: user.state, TribalResident: user.tribal, EligibilityProgram: user.benefit };

  if (user.test_or_live === 't') {
    // BUG: These warnings say, 'url' is assigned a value but never used.
    let url = 'https://lifeline-preprod.cgmllc.net/api/v2/disclosuresconfiguration';
  } else {
    let url = 'https://lifeline.cgmllc.net/api/v2/disclosuresconfiguration';
  }

  const config = {
    method: 'POST',
    mode: 'cors',
    body: payload,
  };
  fetch(url, config) // BUG: This error says, 'url' is not defined.
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  return;
};

//  Get disclosures from CGM
// def get_cgm_disclosures(user):
//     payload = {"Token": user["token"], "PackageID": user["package_id"], "ResidenceState": user["state"], "TribalResident": user["tribal"], "EligibilityProgram": user["benefit"]}  # Form request data

//     if user["test_or_live"] == "t":
//         url = "https://lifeline-preprod.cgmllc.net/api/v2/disclosuresconfiguration"
//     else:
//         url = "https://lifeline.cgmllc.net/api/v2/disclosuresconfiguration"

//     response = requests.post(url, headers={"Content-Type": "application/x-www-form-urlencoded"}, data=payload)  # Make request to CGM
//     response_json = json.loads(response.text)

//     if response_json["Status"] == "Failure":
//         print("CGM RESPONSE", json.dumps(response_json, indent=2))

//     user["ieh"] = str(response_json["CaptureIehForm"]).lower()  # Update User fields
//     user["items"] = response_json["DisclosureItems"]
//     return user
