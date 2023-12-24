export const ME = "Chan, Y.-C.";

const GREAT_KNOT = "Great Knot";
const RED_KNOT = "Red Knot";
const BAR_TAILED_GODWIT = "Bar-tailed Godwit";
const MACROBENTHOS = "Macrobenthos";
const YELLOW_SEA = "Yellow Sea";
const WADDEN_SEA = "Wadden Sea";
const SURVIVAL_ANALYSIS = "Survival Analysis";
const SATELLITE_TRACKING = "Satellite Tracking";
const REVIEW = "Review";
const INTERDISCIPLINARY = "Interdisciplinary";

export const CATEGORIES = {
  SPECIES: [GREAT_KNOT, RED_KNOT, BAR_TAILED_GODWIT, MACROBENTHOS],
  PLACE: [YELLOW_SEA, WADDEN_SEA],
  METHOD: [SURVIVAL_ANALYSIS, SATELLITE_TRACKING, REVIEW, INTERDISCIPLINARY],
};

const PUBLICATIONS = [
   {
    authors: [
      ME,
        "Chan, D. T. C.",
       "Tibbitts, T. L.",
      "Hassell, C. J.",
       "Piersma, T.",
       ],
    year: 2023,
    title:
      "Site fidelity of migratory shorebirds facing habitat deterioration: insights from satellite tracking and mark-resighting",
    journal: "Movement Ecology",
    journalIssue: "79",
    url: "https://movementecologyjournal.biomedcentral.com/counter/pdf/10.1186/s40462-023-00443-9.pdf",
    doi: "10.1186/s40462-023-00443-9",
    categories: [
      BAR_TAILED_GODWIT,
      GREAT_KNOT,
      YELLOW_SEA,
      SATELLITE_TRACKING,
    ],
  },
    {
    authors: [
      ME,
      "Tibbitts, T. L.",
      "Dorofeev, D.",
      "Hassell, C. J.",
       "Piersma, T.",
       ],
    year: 2022,
    title:
      "Hidden in plain sight: migration routes of the elusive Anadyr bar-tailed godwit revealed by satellite tracking",
    journal: "Journal of Avian Biology",
    journalIssue: "e02988",
    url: "https://onlinelibrary.wiley.com/doi/epdf/10.1111/jav.02988",
    doi: "10.1111/jav.02988",
    categories: [
      BAR_TAILED_GODWIT,
      YELLOW_SEA,
      SATELLITE_TRACKING,
    ],
  },
  {
    authors: [ME],
    year: 2021,
    title:
      "Struggles Ashore: Migration Ecology of Threatened Shorebirds in the East Asian−Australasian Flyway",
    journal: "University of Groningen",
    journalIssue: "",
    url: "https://chanyingchi.github.io/phdthesis/",
    doi: "10.33612/diss.170156504",
    categories: [
      GREAT_KNOT,
      RED_KNOT,
      BAR_TAILED_GODWIT,
      YELLOW_SEA,
      SATELLITE_TRACKING,
    ],
  },
  {
    authors: [
      "Lameris, T. K.",
      "Hoekendijk, J.",
      "... Brasseur,  S.",
      ME,
      "... van Langevelde, F.",
    ],
    year: 2021,
    title:
      "Migratory vertebrates shift migration timing and distributions in a warming Arctic",
    journal: "Animal Migration",
    journalIssue: "8: 110-131",
    url: "https://doi.org/10.1515/ami-2020-0112",
    doi: "10.1515/ami-2020-0112",
    categories: [REVIEW],
  },
  {
    authors: [
      "Piersma, T.",
      "Kok, E. M. A.",
      "Hassell, C. J.",
      "Peng, H.-B.",
      "Verkuil, Y. I.",
      "Lei, G.",
      "Karagicheva, J.",
      "Rakhimberdiev, E.",
      "Howey, P. W.",
      "Tibbitts, T. L.",
      ME,
    ],
    year: 2021,
    title: (
      <span>
        When a typical jumper skips: itineraries and staging habitats used by
        Red Knots (<i>Calidris canutus piersmai</i>) migrating between northwest
        Australia and the New Siberian Islands
      </span>
    ),
    journal: "Ibis",
    journalIssue: "",
    url: "https://onlinelibrary.wiley.com/doi/epdf/10.1111/ibi.12964",
    doi: "10.1111/ibi.12964",
    categories: [RED_KNOT, YELLOW_SEA, SATELLITE_TRACKING],
  },

  {
    authors: [
      "Peng, H.-B.",
      ME,
      "Compton, T. J.",
      "Cheng, X. F.",
      "Melville, D. S.",
      "Zhang, S. D.",
      "Zhang, Z.",
      "Lei, G.",
      "Ma, Z.",
      "Piersma, T.",
    ],
    year: 2021,
    title:
      "Mollusc aquaculture homogenizes intertidal soft-sediment communities along the 18,400 km long coastline of China",
    journal: "Diversity and Distributions",
    journalIssue: "",
    url: "https://onlinelibrary.wiley.com/doi/epdf/10.1111/ddi.13302",
    doi: "10.1111/ddi.13302",
    categories: [MACROBENTHOS, YELLOW_SEA],
  },

  {
    authors: [
      "Muller, J.R.",
      ME,
      "Piersma, T.",
      "Chen, Y.P.",
      "Aarninkhof, S.G.",
      "Hassell, C.J.",
      "Tao, J.F.",
      "Gong, Z.",
      "Wang, Z.B.",
      "van Maren, D.S.",
    ],
    year: 2020,
    title:
      "Building for nature: Preserving threatened bird habitat in port design",
    journal: "Water",
    journalIssue: "12(8): 2134",
    url: "https://www.mdpi.com/2073-4441/12/8/2134/pdf",
    doi: "10.3390/w12082134",
    categories: [
      INTERDISCIPLINARY,
      GREAT_KNOT,
      BAR_TAILED_GODWIT,
      YELLOW_SEA,
      SATELLITE_TRACKING,
    ],
  },
  {
    authors: [
      "Muller, J.R.",
      "Chen, Y.P.",
      "Aarninkhof, S.G.",
      ME,
      "Piersma, T.",
      "van Maren, D.S.",
      "Tao, J.F.",
      "Wang, Z.B.",
      "Gong, Z.",
    ],
    year: 2020,
    title:
      "Ecological impact of land reclamation on Jiangsu coast (China): A novel ecotope assessment for Tongzhou Bay",
    journal: "Water Science and Engineering",
    journalIssue: "13(1): 57-64",
    url: "https://www.sciencedirect.com/science/article/pii/S1674237020300211/pdfft?md5=add130fcedaf5a9cdb18bb45844dee85&pid=1-s2.0-S1674237020300211-main.pdf",
    doi: "10.1016/j.wse.2020.04.001",
    categories: [
      INTERDISCIPLINARY,
      GREAT_KNOT,
      BAR_TAILED_GODWIT,
      YELLOW_SEA,
      SATELLITE_TRACKING,
    ],
  },
  {
    authors: [
      ME,
      "Tibbitts, T.L.",
      "Lok, T.",
      "Hassell, C.J.",
      "Peng, H.-B.",
      "Ma, Z.",
      "Zhang, Z.",
      "Piersma, T.",
    ],
    year: 2019,
    title:
      "Filling knowledge gaps in a threatened shorebird flyway through satellite tracking",
    journal: "Journal of Applied Ecology",
    journalIssue: "56 (10): 2305-2315",
    url: "https://besjournals.onlinelibrary.wiley.com/doi/epdf/10.1111/1365-2664.13474",
    doi: "10.1111/1365-2664.13474",
    categories: [GREAT_KNOT, YELLOW_SEA, SATELLITE_TRACKING],
  },
  {
    authors: [
      ME,
      "Peng, H.-B.",
      "Han, Y.-X.",
      "Chung, S. S.-W.",
      "Li, J.",
      "Zhang, L.",
      "Piersma, T.",
    ],
    year: 2019,
    title:
      "Conserving unprotected important coastal habitats in the Yellow Sea: Shorebird occurrence, distribution and food resources at Lianyungang",
    journal: "Global Ecology and Conservation",
    journalIssue: "20: e00724",
    url: "https://www.sciencedirect.com/science/article/pii/S2351989419301325/pdfft?md5=04b1229450d1b1f9b156bc0f803ff9c4&pid=1-s2.0-S2351989419301325-main.pdf",
    doi: "10.1016/j.gecco.2019.e00724",
    categories: [GREAT_KNOT, BAR_TAILED_GODWIT, YELLOW_SEA, SATELLITE_TRACKING],
  },
  {
    authors: [
      "Zhang, S.-D.",
      "Ma, Z.",
      "Choi, C.-Y.",
      "Peng, H.-B.",
      "Melville, D.S.",
      "Zhao, T.-T.",
      "Bai, Q.-Q.",
      "Liu, W.-L.",
      ME,
      "van Gils, J.A.",
      "Piersma, T.",
    ],
    year: 2019,
    title:
      "Morphological and digestive adjustments buffer performance: how staging shorebirds cope with severe food declines",
    journal: "Ecology and Evolution",
    journalIssue: "9(7): 3868-3878",
    url: "https://onlinelibrary.wiley.com/doi/epdf/10.1002/ece3.5013",
    doi: "10.1002/ece3.5013",
    categories: [GREAT_KNOT, YELLOW_SEA],
  },
  {
    authors: [ME],
    year: 2019,
    title:
      "Safeguarding the future of migratory shorebirds along the Chinese coast – what else matters?",
    journal: "Wader Study",
    journalIssue: "126(1), 75-76",
    doi: "10.18194/ws.00142",
    url: "https://www.waderstudygroup.org/wp-content/uploads/2019/04/1261-Wading-through-Literature.pdf",
    categories: [GREAT_KNOT, BAR_TAILED_GODWIT, YELLOW_SEA],
  },

  {
    authors: [
      "Zhang, S.-D.",
      "Ma, Z.",
      "Choi, C.-Y.",
      "Peng, H.-B.",
      "Bai, Q.-Q.",
      "Liu, W.-L.",
      "Tan, K.",
      "Melville, D. S.",
      "He, P.",
      ME,
      "van Gils, J. A.",
      "Piersma, T.",
    ],
    year: 2018,
    title:
      "Persistent use of a shorebird staging site in the Yellow Sea despite severe declines in food resources implies a lack of alternatives",
    journal: "Bird Conservation International",
    journalIssue: "28(4): 534-548",
    url: "https://www.rug.nl/research/portal/files/62879746/Bird_Conservation_International_2018_Persistent_use_of_a_shorebird_staging_site.pdf",
    doi: "10.1017/S0959270917000430",
    categories: [GREAT_KNOT, BAR_TAILED_GODWIT, YELLOW_SEA],
  },
  {
    authors: [
      "Piersma, T.",
      ME,
      "Mu, T.",
      "Hassell, C. J.",
      "Melville, D. S.",
      "Peng, H. B.",
      "Ma, Z.",
      "Zhang, Z.",
      "Wilcove, D. S.",
    ],
    year: 2017,
    title:
      "Loss of habitat leads to loss of birds: reflections on the Jiangsu, China, coastal development plans",
    journal: "Wader Study",
    journalIssue: "124: 93–98",
    url: "https://www.waderstudygroup.org/wp-content/uploads/2017/08/1242-Forum.pdf.pdf",
    doi: "10.18194/ws.00077",
    categories: [GREAT_KNOT, BAR_TAILED_GODWIT, YELLOW_SEA, SATELLITE_TRACKING],
  },
  {
    authors: [
      ME,
      "Brugge, M.",
      "Tibbitts, T. L.",
      "Dekinga, A.",
      "Porter, R.",
      "Klaassen, R.",
      "Piersma, T.",
    ],
    year: 2016,
    title:
      "Testing an attachment method for solar-powered tracking devices on a long-distance migrating shorebird",
    journal: "Journal of Ornithology",
    journalIssue: "157 (1), 277-287",
    doi: "10.1007/s10336-015-1276-4",
    url: "https://www.researchgate.net/profile/Ying_Chi_Chan/publication/281450471_Testing_an_attachment_method_for_solar-powered_tracking_devices_on_a_long-distance_migrating_shorebird/links/55e844c008ae21d099c16ea8.pdf",
    categories: [RED_KNOT, WADDEN_SEA, SATELLITE_TRACKING],
  },
  {
    authors: [
      "Bijleveld, A. I.",
      "MacCurdy, R. B.",
      ME,
      "Penning, E.",
      "Gabrielson, R. M.",
      "Cluderay, J.",
      "Spaulding, E. L.",
      "Dekinga A.",
      "Holthuijsen, S.",
      "ten Horn, J.",
      "Brugge, M.",
      "van Gils, J. A.",
      "Winkler, D. W.",
      "Piersma, T.",
    ],
    year: 2016,
    title:
      "Understanding spatial distributions: negative density-dependence in prey causes predators to trade-off prey quantity with quality",
    journal: "Proceedings of the Royal Society B: Biological Sciences",
    journalIssue: "283(1828), 20151557",
    doi: "10.1098/rspb.2015.1557",
    url: "https://royalsocietypublishing.org/doi/pdf/10.1098/rspb.2015.1557",
    categories: [RED_KNOT, WADDEN_SEA],
  },
  {
    authors: [
      "Piersma, T.",
      "Lok, T.",
      "Chen, Y.",
      "Hassell, C. J.",
      "Yang, H.",
      "Boyle, A.",
      "Slaymaker, M.",
      ME,
      "Melville, D.S.",
      "Zhang, Z.",
      "Ma, Z.",
    ],
    year: 2016,
    title:
      "Simultaneous declines in summer survival of three shorebird species signals a flyway at risk",
    journal: "Journal of Applied Ecology",
    journalIssue: "53 (2), 479-490",
    doi: "10.1111/1365-2664.12582",
    url: "https://besjournals.onlinelibrary.wiley.com/doi/pdf/10.1111/1365-2664.12582",
    categories: [
      GREAT_KNOT,
      BAR_TAILED_GODWIT,
      RED_KNOT,
      YELLOW_SEA,
      SURVIVAL_ANALYSIS,
    ],
  },
  {
    authors: [
      "Melville, D. S.",
      "Peng, H. B.",
      ME,
      "Bai, Q.",
      "He, P.",
      "Tan, K.",
      "Chen, Y.",
      "Zhang, S.",
      "Ma, Z.",
    ],
    year: 2016,
    title: (
      <span>
        Gaizhou, Liaodong Bay, Liaoning Province, China: A site of international
        importance for Great Knot <i>Calidris tenuirostris</i> and other
        shorebirds.
      </span>
    ),
    journal: "The Stilt",
    journalIssue: "69–70: 57–61",
    url: "https://www.researchgate.net/profile/Qingquan_Bai/publication/313601146_Gaizhou_Liaodong_bay_Liaoning_province_China_-_A_site_of_international_importance_for_great_knot_calidris_tenuirostris_and_other_shorebirds/links/58f75f57a6fdccd3e0890488/Gaizhou-Liaodong-bay-Liaoning-province-China-A-site-of-international-importance-for-great-knot-calidris-tenuirostris-and-other-shorebirds.pdf",
    doi: "",
    categories: [GREAT_KNOT, YELLOW_SEA],
  },
];

export default PUBLICATIONS;
