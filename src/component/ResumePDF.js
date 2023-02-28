import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ResumePDF = () => {
  const firstname = useSelector((state) => {
    return state.firstname;
  });

  const middlename = useSelector((state) => {
    return state.middlename;
  });

  const lastname = useSelector((state) => {
    return state.lastname;
  });

  const address = useSelector((state) => {
    return state.address;
  });

  const email = useSelector((state) => {
    return state.email;
  });

  const links = useSelector((state) => {
    return state.links;
  });

  const college = useSelector((state) => {
    return state.college;
  });

  const major = useSelector((state) => {
    return state.major;
  });

  const degree = useSelector((state) => {
    return state.degree;
  });

  const gpa = useSelector((state) => {
    return state.gpa;
  });

  const date = useSelector((state) => {
    return state.date;
  });

  const courseworks = useSelector((state) => {
    return state.courseworks;
  });

  const skills = useSelector((state) => {
    return state.skills;
  });

  const workexperiences = useSelector((state) => {
    return state.workexperiences;
  });

  const fullNameText = () => {
    return (
      firstname + " " + middlename + (middlename === "" ? "" : " ") + lastname
    );
  };

  const emailAndAddressText = () => {
    return email + " | " + address;
  };

  const linksText = () => {
    let linksString = [];
    for (let i = 0; i < links.length; i++) {
      linksString.push({
        text: links[i],
        link: "https://" + links[i],
        color: "blue",
      });
      if (i !== links.length - 1) linksString.push({ text: " | " });
    }
    return linksString;
  };

  const educationText = () => {
    return [
      {
        text: [
          { text: degree + ", " },
          { text: major, bold: true },
          { text: ",\n" },
          { text: college },
        ],
        width: "*",
        alignment: "left",
      },
      {
        text: [
          { text: "Expected Graduation Date: " + date },
          { text: "\n" },
          { text: gpa !== "" ? "GPA: " + gpa + " / 4.000" : "" },
        ],
        width: "*",
        alignment: "right",
      },
    ];
  };

  const courseworkText = () => {
    let courseworkString = "";
    for (let i = 0; i < courseworks.length; i++) {
      courseworkString += courseworks[i];
      if (i !== courseworks.length - 1) courseworkString += ", ";
    }
    return [
      { text: "Coursework\t", bold: true, width: 75 },
      { text: courseworkString, width: "*" },
    ];
  };

  const skillsText = () => {
    let skillsString = "";
    for (let i = 0; i < skills.length; i++) {
      skillsString += skills[i];
      if (i !== skills.length - 1) skillsString += ", ";
    }
    return [
      { text: "Skills\t", bold: true, width: 75 },
      { text: skillsString, width: "*" },
    ];
  };

  const separator = () => {
    return {
      canvas: [
        {
          type: "line",
          x1: 0,
          y1: 0,
          x2: 538,
          y2: 0,
          lineWidth: 1,
        },
      ],
    };
  };
  let experienceData = [];

  const workExperienceText = () => {
    for (let i = 0; i < workexperiences.length; i++) {
      console.log("Hello!");
      experienceData.push({
        columns: [
          {
            text: [
              { text: workexperiences[i].jobTitle + "\n", bold: true },
              { text: workexperiences[i].companyName + "\n" },
            ],
            width: "*",
            alignment: "left",
          },
          {
            text:
              workexperiences[i].startDate +
              " - " +
              workexperiences[i].endDate +
              "\n",
            width: "*",
            alignment: "right",
          },
        ],
      });
      experienceData.push({
        ul: [{ ul: [{ text: workexperiences[i].jobDescription }] }],
      });
      experienceData.push({ text: "\n" });
    }

    return experienceData;
  };

  const docDefinition = {
    pageMargins: [28.8, 28.8, 28.8, 28.8],
    content: [
      {
        text: fullNameText(),
        style: "name",
      },

      { text: emailAndAddressText(), alignment: "center", style: "body" },

      {
        text: linksText(),
        alignment: "center",
        style: "body",
      },

      {
        text: "\nEDUCATION",
        style: "header",
      },

      separator(),

      {
        columns: educationText(),
        style: "body",
      },

      {
        text: "\nSKILLS & COURSEWORK",
        style: "header",
      },

      separator(),

      {
        columns: courseworkText(),
        style: "body",
      },

      {
        columns: skillsText(),
        style: "body",
      },
      {
        text: "\nEXPERIENCE",
        style: "header",
      },

      separator(),

      workExperienceText(),
    ],
    styles: {
      name: {
        fontSize: 18,
        bold: true,
        alignment: "center",
      },
      header: {
        fontsize: 14,
        bold: true,
      },
      body: {
        fontSize: 12,
      },
    },
  };

  const handleDownloadResume = () => {
    pdfMake.createPdf(docDefinition).download("Resume.pdf");
  };

  return (
    <div>
      <Button onClick={handleDownloadResume}>Download Resume</Button>
    </div>
  );
};

export default ResumePDF;
