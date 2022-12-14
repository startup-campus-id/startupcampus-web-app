import CollectionsIcon from '@mui/icons-material/Collections';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

export const tentang = (track) => {
  const isFounder = track.match('the-founder');
  const isDataScience = track.match('data-science');
  const isArtificialIntellegence = track.match('artificial');

  const dunia = track.match('the-founder')
    ? 'startup'
    : track.match('uiux')
    ? 'UI/UX'
    : track.match('data-science')
    ? 'Data Science'
    : track.match('artificial')
    ? 'Artificial Intelligence'
    : 'startup';
  return [
    {
      icon: <PaidOutlinedIcon fontSize="large" color="sc_blue" />,
      title: 'Kesempatan mendapatkan pendanaan',
      desc: track.match('artificial')
        ? 'Dapatkan pendanaan untuk pengembangan produk dan portofolio.'
        : 'Dapatkan pendanaan untuk pengembangan produk tahap awal.',
    },
    {
      icon: <MenuBookOutlinedIcon fontSize="large" color="sc_blue" />,
      title: 'Pengajar praktisi terbaik',
      desc: `Pembelajaran dirancang dan diajarkan oleh praktisi terbaik di bidang ${dunia}.`,
    },
    {
      icon: <WorkspacePremiumOutlinedIcon fontSize="large" color="sc_blue" />,
      title: 'Sertifikat kompetensi',
      desc: 'Sertifikat kompetensi sudah terakreditasi resmi dari Kemendikbud.',
    },
    {
      icon: <StarBorderIcon fontSize="large" color="sc_blue" />,
      title: 'Dukungan karier',
      desc: 'Mulai membangun karier sejak dini melalui portofolio dan sesi konseling.',
    },
    {
      icon: <HandshakeOutlinedIcon fontSize="large" color="sc_blue" />,
      title: (
        <span>
          <i>Networking</i> dengan {'investor'}
        </span>
      ),
      desc: isFounder
        ? 'Perkuat bisnis dengan membangun network dengan pendiri startup lain, investor, mentor, dan praktisi di dunia startup.'
        : isDataScience
        ? 'Perkuat bisnis dengan membangun network dengan investor, mentor, dan praktisi di dunia Data Science.'
        : isArtificialIntellegence
        ? 'Perkuat bisnis dengan membangun network dengan para ahli bidang Artificial Intelligence, investor, mentor, dan praktisi di dunia AI.'
        : `Membangun network dengan investor, mentor, dan praktisi di dunia ${dunia}.`,
    },
    {
      icon: (
        <CollectionsBookmarkOutlinedIcon fontSize="large" color="sc_blue" />
      ),
      title: 'Akses materi pembelajaran seumur hidup',
      desc: 'Akses materi pembelajaran berupa modul belajar, e-book, video, dan artikel.',
    },
  ];
};
