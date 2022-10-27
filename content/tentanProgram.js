import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CollectionsIcon from "@mui/icons-material/Collections";

export const tentang = (track) => {
  const isFounder = track.match("the-founder");
  return [
    {
      icon: <HistoryEduIcon fontSize="large" color="sc_blue" />,
      title: isFounder
        ? "Kesempatan mendapatkan pendanaan"
        : "Pengajar berpengalaman ",
      desc: isFounder
        ? "Dapatkan pendanaan untuk pengembangan produk tahap awal"
        : "Diajarkan langsung oleh praktisi profesional.",
    },
    {
      icon: <MenuBookOutlinedIcon fontSize="large" color="sc_blue" />,
      title: isFounder
        ? "Pengajar praktisi terbaik"
        : "Kurikulum dirancang oleh ahli di bidangnya",
      desc: isFounder
        ? "Pembelajaran dirancang dan diajarkan oleh praktisi terbaik di bidang startup."
        : "Pembelajaran dirancang oleh praktisi terbaik di bidang startup.",
    },
    {
      icon: <WorkspacePremiumIcon fontSize="large" color="sc_blue" />,
      title: "Sertifikat kompetensi",
      desc: "Sertifikat kompetensi sudah terakreditasi resmi dari Kemendikbud.",
    },
    {
      icon: <StarBorderIcon fontSize="large" color="sc_blue" />,
      title: "Dukungan karier",
      desc: "Mulai membangun karier sejak dini melalui portofolio dan sesi konseling.",
    },
    {
      icon: <HandshakeIcon fontSize="large" color="sc_blue" />,
      title: (
        <span>
          <i>Networking</i> dengan para {isFounder ? "investor" : "pakar"}
        </span>
      ),
      desc: isFounder
        ? "Perkuat bisnis dengan membangun network dengan pendiri startup lain, investor, mentor, dan praktisi di dunia startup."
        : "Membangun network dengan investor, mentor, dan praktisi digital di dunia startup.",
    },
    {
      icon: <CollectionsIcon fontSize="large" color="sc_blue" />,
      title: "Akses materi pembelajaran seumur hidup",
      desc: "Akses materi pembelajaran berupa modul belajar, e-book, video, dan artikel.",
    },
  ];
};
