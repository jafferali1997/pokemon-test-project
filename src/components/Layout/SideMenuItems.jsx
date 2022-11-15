import IMAGES from "../../assets/images";
import PATH from "../../utils/path";

const SIDEMENU = [
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Transit",
    icon: (
      <div>
        <img src={IMAGES.TRANSIT} alt="brand icon" style={{ height: "20px" }} />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Process New Vechicle",
    icon: (
      <div>
        <img
          src={IMAGES.PROCESS_NEW_VECHICLE}
          alt="brand icon"
          style={{ height: "20px" }}
        />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Frame Insp",
    icon: (
      <div>
        <img
          src={IMAGES.FRAME_INSP}
          alt="brand icon"
          style={{ height: "20px" }}
        />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Mechanical Insp",
    icon: (
      <div>
        <img
          src={IMAGES.MECHANICAL_INSP}
          alt="brand icon"
          style={{ height: "20px" }}
        />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Mechanical Reapair",
    icon: (
      <div>
        <img
          src={IMAGES.MECHANICAL_IREPAIR}
          alt="brand icon"
          style={{ height: "20px" }}
        />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Detail",
    icon: (
      <div>
        <img src={IMAGES.DETAILS} alt="brand icon" style={{ height: "20px" }} />
      </div>
    ),
  },
  {
    path: PATH.COSMATIC_INSP,
    name: "Cosmatic Insp",
    icon: (
      <div>
        <img
          src={IMAGES.COSMATICS}
          alt="brand icon"
          style={{ height: "20px" }}
        />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "PDR",
    icon: (
      <div>
        <img src={IMAGES.PDR} alt="brand icon" style={{ height: "20px" }} />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Paint Work",
    icon: (
      <div>
        <img
          src={IMAGES.PAINT_WORK}
          alt="brand icon"
          style={{ height: "20px" }}
        />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Tyre",
    icon: (
      <div>
        <img src={IMAGES.TYRE} alt="brand icon" style={{ height: "20px" }} />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Upholstery",
    icon: (
      <div>
        <img
          src={IMAGES.UPHOLSTERY}
          alt="brand icon"
          style={{ height: "20px" }}
        />
      </div>
    ),
  },
  {
    path: PATH.ADMIN_DASHBOARD,
    name: "Misc Interior/Ext Repairs",
    icon: (
      <div>
        <img
          src={IMAGES.MISC_INTERIOR}
          alt="brand icon"
          style={{ height: "20px" }}
        />
      </div>
    ),
  },
];

export default SIDEMENU;
