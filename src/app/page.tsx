'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Waves,
  MapPin,
  Building2,
  Users,
  Car,
  Shield,
  Thermometer,
  TreePalm,
  Anchor,
  Building,
  Home as HomeIcon,
  Heart,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  DollarSign,
  Award,
  Compass,
  Fish,
  Mountain,
  X,
  Grid3X3,
  FileText,
  Scale,
  Droplet,
  Hammer,
  Route,
  Music,
  Home,
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from 'lucide-react'
import Image from 'next/image'

// Property data
const propertyData = {
  name: "Bilandang Beach Property",
  location: "Brgy. Taluya, Glan, Sarangani Province, Philippines",
  pricePerSqm: 3300,
  currency: "PHP",
  totalArea: {
    hectares: 12.3,
    acres: 30.4
  },
  beachLength: 240,
  coastlineLength: 600,
  completion: 80,
  additionalCapital: 1000000,
  completionTime: "6-8 months",
  waterTemperature: 29,
  airportDistance: "50 minutes",
  distanceToIndonesia: "100 nautical miles"
}

const buildings = [
  {
    name: "Main Building",
    description: "Spanish Mediterranean style with 13m high atrium, marble lobby, restaurant, kitchen, bar, discotheque, and 8-room private residence on first floor",
    icon: Building2,
    features: ["13m High Atrium", "Marble Lobby", "Restaurant", "Full Kitchen & Bar", "Discotheque/Bar", "8-Room Private Residence", "Surrounding Terraces"]
  },
  {
    name: "North Wing",
    description: "10 luxury rooms, each 48 sqm with large bathrooms and 12 sqm balconies, all with sea view",
    icon: HomeIcon,
    features: ["10 Rooms", "48 sqm Each", "Sea View", "Private Balconies", "Large Bathrooms"]
  },
  {
    name: "South Wing",
    description: "20 luxury rooms with the same premium specifications as North Wing",
    icon: HomeIcon,
    features: ["20 Rooms", "48 sqm Each", "Sea View", "Private Balconies", "Large Bathrooms"]
  },
  {
    name: "Facility Center",
    description: "1,200 sqm with 14 rooms including 160 sqm boathouse and 340 sqm drive-in patio",
    icon: Building,
    features: ["14 Rooms", "Boathouse", "Drive-in Patio", "Covered Terraces"]
  }
]

const amenities = [
  { icon: Waves, label: "240m White Sand Beach", description: "Pristine beach with crystal-clear waters" },
  { icon: Fish, label: "Coral Reefs", description: "Beautiful tropical marine life" },
  { icon: Anchor, label: "60m Pier", description: "Natural materials, prevents sand washout" },
  { icon: Shield, label: "1km Perimeter Wall", description: "4m high for complete privacy" },
  { icon: Car, label: "Gate House", description: "120 sqm with generator & water treatment" },
  { icon: TreePalm, label: "Water Tower", description: "22 m³ capacity" },
  { icon: Thermometer, label: "Year-round 29°C", description: "Perfect water temperature" },
  { icon: Mountain, label: "Natural Protection", description: "Surrounded by mountains" }
]

const possibleUses = [
  { icon: Building2, title: "Luxury Beach Resort", description: "Ideal for high-end tourism" },
  { icon: Users, title: "Convention Center", description: "Large-scale events and conferences" },
  { icon: Award, title: "Corporate Training Facility", description: "Executive retreats and team building" },
  { icon: Star, title: "Private School", description: "Exclusive educational institution" },
  { icon: Fish, title: "Marine Research Center", description: "Marine biology research facility" },
  { icon: Heart, title: "Retirement Community", description: "Peaceful tropical living" },
  { icon: Heart, title: "Health Resort", description: "Wellness and spa destination" },
  { icon: Compass, title: "Spiritual Center", description: "Meditation and retreat facility" }
]

// Legal documents
const legalDocuments = [
  {
    title: "Transfer Certificate of Title No. T-9144",
    description: "First of three properly titled lots registered with the Registry of Deeds",
    type: "Land Title",
    images: ["/images/gallery/documents/title-1-p1.jpeg", "/images/gallery/documents/title-1-p2.jpeg", "/images/gallery/documents/title-1-p3.jpeg", "/images/gallery/documents/title-1-p4.jpeg"]
  },
  {
    title: "Transfer Certificate of Title No. T-9145",
    description: "Second titled lot, part of the total 12.3 hectare property",
    type: "Land Title",
    images: ["/images/gallery/documents/title-2-p1.jpeg", "/images/gallery/documents/title-2-p2.jpeg", "/images/gallery/documents/title-2-p3.jpeg", "/images/gallery/documents/title-2-p4.jpeg"]
  },
  {
    title: "Transfer Certificate of Title No. T-9146",
    description: "Third titled lot completing the property",
    type: "Land Title",
    images: ["/images/gallery/documents/title-3-p1.jpeg", "/images/gallery/documents/title-3-p2.jpeg", "/images/gallery/documents/title-3-p3.jpeg", "/images/gallery/documents/title-3-p4.jpeg"]
  },
  {
    title: "Provincial Governor's Endorsement",
    description: "Official endorsement from the Provincial Government of Sarangani, demonstrating full government support for the project",
    type: "Government Endorsement",
    images: ["/images/gallery/documents/certification.jpeg"]
  },
  {
    title: "Environmental Compliance Certificate",
    description: "ECC-XI-99-192 - Environmental clearance from the Department of Environment and Natural Resources",
    type: "Environmental Certificate",
    images: ["/images/gallery/documents/ecc-1.jpeg", "/images/gallery/documents/ecc-2.jpeg", "/images/gallery/documents/ecc-3.jpeg", "/images/gallery/documents/ecc-4.jpeg"]
  }
]

// Completion items
const completionItems = [
  {
    item: "Windows & Doors (Seaside)",
    description: "Installation of windows and doors on the seaside of the North and South wings",
    status: "pending"
  },
  {
    item: "Windows & Doors (Facility Center)",
    description: "Installation of windows and doors in the facility center building",
    status: "pending"
  },
  {
    item: "Potable Water System",
    description: "Deep well drilling or Reverse Osmosis saltwater treatment system",
    status: "pending"
  },
  {
    item: "Landscaping",
    description: "Complete landscaping of the property grounds",
    status: "pending"
  },
  {
    item: "Road Improvement",
    description: "1.4km access road from provincial road to property (widened and straightened, landowners compensated)",
    status: "ready"
  },
  {
    item: "Electrical Connection",
    description: "Connection to main electricity line",
    status: "completed"
  },
  {
    item: "Building Structure",
    description: "All main building structures and foundations",
    status: "completed"
  },
  {
    item: "Perimeter Wall",
    description: "1,000 meter long, 4 meter high wall",
    status: "completed"
  }
]

// Real property images from PDF
const galleryCategories = [
  {
    name: "Aerial Views",
    images: [
      { src: "/images/gallery/aerial/aerial-view-1.jpeg", alt: "Aerial Satellite View 1", title: "Satellite View of Property" },
      { src: "/images/gallery/aerial/aerial-view-2.jpeg", alt: "Aerial Satellite View 2", title: "Property Overview from Above" }
    ]
  },
  {
    name: "Main Building",
    images: [
      { src: "/images/gallery/main-building/front-view.jpeg", alt: "Main Building Front View", title: "Main Building - Front Side View" },
      { src: "/images/gallery/main-building/seaside-view.jpeg", alt: "Main Building Seaside View", title: "Main Building - Seaside View" },
      { src: "/images/gallery/main-building/lobby-atrium.jpeg", alt: "Main Building Lobby Atrium", title: "Lobby / Atrium (13m High)" },
      { src: "/images/gallery/main-building/kitchen.jpeg", alt: "Main Building Kitchen", title: "Commercial Kitchen" },
      { src: "/images/gallery/main-building/restaurant.jpeg", alt: "Main Building Restaurant", title: "Restaurant Area" },
      { src: "/images/gallery/main-building/outside-bar.jpeg", alt: "Outside Bar", title: "Outside Bar Area" }
    ]
  },
  {
    name: "Wing Buildings",
    images: [
      { src: "/images/gallery/wings/north-wing-front.jpeg", alt: "North Wing Front View", title: "North Wing - Front View (10 Rooms)" },
      { src: "/images/gallery/wings/north-wing-seaside.jpeg", alt: "North Wing Seaside View", title: "North Wing - Seaside View" },
      { src: "/images/gallery/wings/south-wing-front.jpeg", alt: "South Wing Front View", title: "South Wing - Front View (20 Rooms)" },
      { src: "/images/gallery/wings/south-wing-seaside.jpeg", alt: "South Wing Seaside View", title: "South Wing - Seaside View" }
    ]
  },
  {
    name: "Facilities",
    images: [
      { src: "/images/gallery/facilities/facility-center.jpeg", alt: "Facility Center", title: "Facility Center & Boathouse" },
      { src: "/images/gallery/facilities/gatehouse.jpeg", alt: "Gatehouse", title: "Main Entrance / Gatehouse" },
      { src: "/images/gallery/facilities/water-tower.jpeg", alt: "Water Tower", title: "22m³ Water Tower" },
      { src: "/images/gallery/facilities/canal.jpeg", alt: "Water Disposal Canal", title: "200m Water Disposal Canal" }
    ]
  },
  {
    name: "Coastal Views",
    images: [
      { src: "/images/gallery/coastal/view-south-to-north.jpeg", alt: "Coastal View South to North", title: "View from South to North" },
      { src: "/images/gallery/coastal/view-north-to-south.jpeg", alt: "Coastal View North to South", title: "View from North to South" },
      { src: "/images/gallery/coastal/northern-coast.jpeg", alt: "Northern Coastal Part", title: "Northern Coastal Area" },
      { src: "/images/gallery/coastal/beach-panorama.jpeg", alt: "Beach Panorama", title: "Beach Panorama View" }
    ]
  },
  {
    name: "Coral Reef",
    images: [
      { src: "/images/gallery/coral-reef/soft-corals.jpeg", alt: "Soft Corals", title: "Group of Soft Corals" },
      { src: "/images/gallery/coral-reef/hard-corals-1.jpeg", alt: "Hard Corals", title: "Hard Corals" },
      { src: "/images/gallery/coral-reef/hard-corals-2.jpeg", alt: "Hard Corals 2", title: "Coral Reef Formation" },
      { src: "/images/gallery/coral-reef/coral-fishes.jpeg", alt: "Coral Fishes", title: "Hard Corals & Tropical Fish" }
    ]
  }
]

// Potential Development images (AI-generated concept art)
const potentialImages = [
  { src: "/images/gallery/potential/aerial-complete.jpeg", alt: "Completed Resort Aerial View", title: "Completed Resort - Aerial View", description: "Bird's eye view of the fully developed luxury beach resort" },
  { src: "/images/gallery/potential/main-building-complete.jpeg", alt: "Main Building Potential", title: "Main Building Entrance", description: "Spanish Mediterranean architecture with grand entrance" },
  { src: "/images/gallery/potential/luxury-room-complete.jpeg", alt: "Luxury Room Interior", title: "Luxury Guest Room", description: "48 sqm room with ocean view and private balcony" },
  { src: "/images/gallery/potential/pool-beach-area.jpeg", alt: "Pool and Beach Area", title: "Infinity Pool & Beach", description: "Resort-style pool overlooking the white sand beach" },
  { src: "/images/gallery/potential/restaurant-terrace.jpeg", alt: "Restaurant Terrace", title: "Beachfront Restaurant", description: "Al fresco dining with stunning ocean views" },
  { src: "/images/gallery/potential/diving-coral-reef.jpeg", alt: "Diving Coral Reef", title: "Scuba Diving Experience", description: "World-class diving at the coral reef sanctuary" }
]

// Flatten all images for the main gallery
const allImages = galleryCategories.flatMap(cat => cat.images)

export default function BeachPropertyPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showGallery, setShowGallery] = useState(false)
  const [showDocGallery, setShowDocGallery] = useState(false)
  const [selectedDoc, setSelectedDoc] = useState<typeof legalDocuments[0] | null>(null)
  const [docImageIndex, setDocImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const filteredImages = selectedCategory 
    ? galleryCategories.find(cat => cat.name === selectedCategory)?.images || []
    : allImages

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const calculateTotalPrice = () => {
    const totalSqm = propertyData.totalArea.hectares * 10000
    return (totalSqm * propertyData.pricePerSqm).toLocaleString()
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">Bilandang Beach Property</h1>
              <p className="text-xs text-muted-foreground">Sarangani Province, Philippines</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Badge variant="outline" className="text-sm px-3 py-1">
              12.3 Hectares
            </Badge>
            <Badge className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
              For Sale
            </Badge>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Inquire About This Property</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we&apos;ll get back to you shortly.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com" 
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+63 XXX XXX XXXX" 
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your interest..." 
                      rows={4}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white">
                  Send Inquiry
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/aerial/aerial-view-1.jpeg"
            alt="Bilandang Beach Property Aerial View"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-20">
          <div className="max-w-3xl">
            <div className="flex gap-2 mb-4">
              <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30">
                <MapPin className="w-3 h-3 mr-1" />
                Sarangani Province, Philippines
              </Badge>
              <Badge className="bg-amber-500 text-white border-0">
                <Award className="w-3 h-3 mr-1" />
                Governor Endorsed
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Bilandang Beach Property
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300 text-3xl md:text-4xl mt-2">
                12.3 Hectares of Paradise
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
              A stunning beach property along the Celebes Sea, featuring Spanish Mediterranean 
              architecture, 240 meters of pristine white sand beach, and crystal-clear waters 
              with vibrant coral reefs.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 text-white">
                <span className="font-semibold">PHP {propertyData.pricePerSqm.toLocaleString()}</span>
                <span className="text-white/80 text-sm ml-1">/ sqm</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 text-white">
                <span className="font-semibold">{propertyData.totalArea.hectares} hectares</span>
                <span className="text-white/80 text-sm ml-1">({propertyData.totalArea.acres} acres)</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 text-white">
                <span className="font-semibold">{propertyData.completion}%</span>
                <span className="text-white/80 text-sm ml-1">completed</span>
              </div>
              <div className="bg-emerald-500/80 backdrop-blur-md rounded-lg px-4 py-2 text-white">
                <span className="font-semibold">3 Titled Lots</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={() => setShowGallery(true)}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white text-lg px-8"
              >
                <Grid3X3 className="w-5 h-5 mr-2" />
                View Gallery
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Schedule a Tour
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Schedule a Property Tour</DialogTitle>
                    <DialogDescription>
                      We&apos;ll arrange a visit to the property at your convenience.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="tour-name">Full Name</Label>
                      <Input id="tour-name" placeholder="Your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="tour-email">Email</Label>
                      <Input id="tour-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="tour-date">Preferred Date</Label>
                      <Input id="tour-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="tour-notes">Special Requests</Label>
                      <Textarea id="tour-notes" placeholder="Any special requests..." rows={3} />
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white">
                    Request Tour
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center">
                  <Waves className="w-7 h-7 text-cyan-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">240m</div>
                <div className="text-sm text-muted-foreground mt-1">White Sand Beach</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <HomeIcon className="w-7 h-7 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">30</div>
                <div className="text-sm text-muted-foreground mt-1">Luxury Rooms</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                  <TreePalm className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">12.3</div>
                <div className="text-sm text-muted-foreground mt-1">Hectares Total</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <Thermometer className="w-7 h-7 text-rose-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">29°C</div>
                <div className="text-sm text-muted-foreground mt-1">Year-Round Water Temp</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governor Endorsement Banner */}
      <section className="py-8 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
            <Award className="w-10 h-10 flex-shrink-0" />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">Officially Endorsed by the Provincial Government of Sarangani</h3>
              <p className="text-white/90">Full government support for the project development</p>
            </div>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/20"
              onClick={() => {
                setSelectedDoc(legalDocuments[3])
                setDocImageIndex(0)
                setShowDocGallery(true)
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Endorsement
            </Button>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Property Overview</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Unique Investment Opportunity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located along the Celebes Sea, the oldest sea in the world, this property offers 
              an unparalleled opportunity for development into a world-class destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/main-building/front-view.jpeg"
                alt="Main Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Prime Location</h3>
                  <p className="text-muted-foreground">
                    Just 50 minutes from General Santos City airport, one of the most modern 
                    airports in the Philippines. Only 100 nautical miles from Indonesia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Tax Benefits</h3>
                  <p className="text-muted-foreground">
                    5-year tax-free period for tourism applications, easily extendable by 
                    additional 5-year periods. Property classified as Tourism Area.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center flex-shrink-0">
                  <Route className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Access Road Ready</h3>
                  <p className="text-muted-foreground">
                    1.4km access road officially converted to public domain. All landowners 
                    have been compensated. Road improvement can start immediately.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                  <Fish className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Marine Paradise</h3>
                  <p className="text-muted-foreground">
                    Huge coral reefs right in front of the beach with beautiful tropical fish 
                    and marine life. Perfect for diving and snorkeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buildings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Buildings & Facilities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Spanish Mediterranean Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built structures designed for luxury living and hospitality, 
              featuring quality construction and elegant design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {buildings.map((building, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center">
                      <building.icon className="w-7 h-7 text-cyan-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{building.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{building.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {building.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-100">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Building Details */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md bg-gradient-to-br from-cyan-50 to-teal-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Discotheque / Bar</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Entertainment venue within the main building, perfect for evening entertainment 
                  and events. Adds significant value for resort operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">8-Room Private Residence</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  First floor of main building includes an 8-room private residence with 
                  surrounding terraces. Perfect for owner&apos;s quarters or VIP accommodation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-br from-emerald-50 to-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">13m High Atrium</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Stunning 13-meter high atrium with full marble tiled lobby creates 
                  an impressive entrance and grand atmosphere for guests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Photo Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore the Property
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real photos of the Bilandang Beach Property - aerial views, buildings, facilities, coastal scenery, and marine life.
            </p>
          </div>

          {/* Gallery Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {allImages.slice(0, 8).map((image, index) => (
              <div 
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
                onClick={() => {
                  setCurrentImage(index)
                  setShowGallery(true)
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm text-center px-2">
                    {image.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => setShowGallery(true)}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
            >
              <Grid3X3 className="w-5 h-5 mr-2" />
              View All {allImages.length} Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Potential Development Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-cyan-500 text-cyan-600">Vision for the Future</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Potential
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conceptual renderings showcasing the property&apos;s potential as a world-class beach resort destination. 
              With 80% completion and an estimated $1M USD investment, this paradise can be fully operational within 6-8 months.
            </p>
          </div>

          {/* Featured Large Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={potentialImages[0].src}
              alt={potentialImages[0].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <Badge className="bg-cyan-500 text-white mb-2">Featured Concept</Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{potentialImages[0].title}</h3>
              <p className="text-white/90 text-lg">{potentialImages[0].description}</p>
            </div>
          </div>

          {/* Grid of Potential Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {potentialImages.slice(1).map((image, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-56">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-semibold text-white text-lg">{image.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Investment Callout */}
          <div className="mt-12 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ready for Development</h3>
                  <p className="text-muted-foreground">
                    80% complete • $1M USD to finish • 6-8 months to operation
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      Inquire Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Inquire About Development</DialogTitle>
                      <DialogDescription>
                        Learn more about the development potential and investment opportunity.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="dev-name">Full Name</Label>
                        <Input id="dev-name" placeholder="Your name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="dev-email">Email</Label>
                        <Input id="dev-email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="dev-phone">Phone</Label>
                        <Input id="dev-phone" placeholder="+63 XXX XXX XXXX" />
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white">
                      Request Information
                    </Button>
                  </DialogContent>
                </Dialog>
                <Button 
                  variant="outline" 
                  onClick={() => setShowGallery(true)}
                  className="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Current Photos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Property Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail has been carefully planned to create a truly exceptional property.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 bg-white group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 flex items-center justify-center group-hover:from-cyan-100 group-hover:to-teal-100 transition-colors">
                    <amenity.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{amenity.label}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Completion Status */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Completion Status</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Done & What Remains
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full transparency on the property&apos;s completion status. The $1M USD estimate covers all remaining items below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {completionItems.map((item, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-md ${
                    item.status === 'completed' 
                      ? 'bg-emerald-50' 
                      : item.status === 'ready' 
                        ? 'bg-amber-50' 
                        : 'bg-gray-50'
                  }`}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.status === 'completed' 
                        ? 'bg-emerald-500' 
                        : item.status === 'ready' 
                          ? 'bg-amber-500' 
                          : 'bg-gray-400'
                    }`}>
                      {item.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      ) : item.status === 'ready' ? (
                        <Clock className="w-5 h-5 text-white" />
                      ) : (
                        <Hammer className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.item}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Badge 
                      variant={item.status === 'completed' ? 'default' : 'outline'}
                      className={`${
                        item.status === 'completed' 
                          ? 'bg-emerald-500 text-white' 
                          : item.status === 'ready' 
                            ? 'border-amber-500 text-amber-600' 
                            : 'border-gray-400 text-gray-600'
                      }`}
                    >
                      {item.status === 'completed' ? 'Completed' : item.status === 'ready' ? 'Ready to Start' : 'Pending'}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Water Supply Note */}
            <Card className="mt-8 border-2 border-cyan-200 bg-cyan-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Water Supply Solution</h3>
                    <p className="text-muted-foreground">
                      Potable water supply requires installation of either a <strong>deep well drilling system</strong> or 
                      a <strong>Reverse Osmosis (RO) saltwater treatment system</strong>. Both are proven, reliable solutions 
                      for beach properties in the region. Cost estimates for either system are included in the $1M completion budget.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Possible Uses */}
      <section className="py-20 bg-gradient-to-br from-cyan-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-white/30 text-white bg-white/10">
              Possibilities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Endless Possibilities
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The property&apos;s unique size and location make it suitable for a wide variety of purposes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {possibleUses.map((use, index) => (
              <Card key={index} className="border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <use.icon className="w-7 h-7 text-cyan-300" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{use.title}</h3>
                  <p className="text-sm text-white/70">{use.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Documentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Legal & Documentation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Legal Documentation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All documents are in order. The property is properly titled, government-endorsed, and environmentally compliant.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Key Legal Highlights */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-green-50">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Scale className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3 Titled Lots</h3>
                  <p className="text-sm text-muted-foreground">
                    T-9144, T-9145, T-9146<br />
                    All properly titled and registered
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber-500 flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Governor Endorsed</h3>
                  <p className="text-sm text-muted-foreground">
                    Official endorsement from<br />
                    Provincial Government of Sarangani
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-teal-50">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyan-500 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">ECC Certified</h3>
                  <p className="text-sm text-muted-foreground">
                    ECC-XI-99-192<br />
                    Environmental Compliance Certificate
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Documents List */}
            <Accordion type="single" collapsible className="w-full">
              {legalDocuments.map((doc, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:bg-gray-50 px-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">
                        {doc.type}
                      </Badge>
                      <span className="font-medium text-left">{doc.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-muted-foreground mb-4">{doc.description}</p>
                    <Button 
                      onClick={() => {
                        setSelectedDoc(doc)
                        setDocImageIndex(0)
                        setShowDocGallery(true)
                      }}
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Document ({doc.images.length} {doc.images.length > 1 ? 'pages' : 'page'})
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Investment Details</h2>
                <p className="text-white/80">Secure this exceptional property today</p>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      PHP {propertyData.pricePerSqm.toLocaleString()}
                    </div>
                    <div className="text-muted-foreground">Price per Square Meter</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      ~PHP 406M
                    </div>
                    <div className="text-muted-foreground">Total Estimated Price</div>
                    <div className="text-sm text-cyan-600 font-medium mt-1">(~$7M USD)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      $1M USD
                    </div>
                    <div className="text-muted-foreground">Estimated Completion Cost</div>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Properly Titled</div>
                      <div className="text-muted-foreground">Three lots with clear titles (T-9144, T-9145, T-9146)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Award className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">SEC Registered</div>
                      <div className="text-muted-foreground">JOBELENT RESORT DEVELOPMENT CORP.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <TreePalm className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Environmental Compliance</div>
                      <div className="text-muted-foreground">ECC-XI-99-192 certified</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Tax Incentives</div>
                      <div className="text-muted-foreground">5-year tax holiday + Tourism Area classification</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white text-lg px-12">
                        Request Full Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Request Full Property Details</DialogTitle>
                        <DialogDescription>
                          Receive the complete property report and investment information.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="detail-name">Full Name</Label>
                          <Input id="detail-name" placeholder="Your name" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="detail-email">Email</Label>
                          <Input id="detail-email" type="email" placeholder="your@email.com" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="detail-phone">Phone</Label>
                          <Input id="detail-phone" placeholder="+63 XXX XXX XXXX" />
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white">
                        Send Request
                      </Button>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Location</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sarangani Province, Philippines
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  The beach property is located in the province of Sarangani along the Celebes Sea, 
                  the oldest sea in the world. Sarangani is a green province with a beautiful tropical 
                  landscape in the most southern part of the Philippines.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                      <Compass className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">50 minutes</span>
                      <span className="text-muted-foreground"> from General Santos City Airport</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Anchor className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">100 nautical miles</span>
                      <span className="text-muted-foreground"> from Indonesia</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Fish className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Largest fish port</span>
                      <span className="text-muted-foreground"> in the Philippines nearby</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/aerial/aerial-view-2.jpeg"
                alt="Aerial view of property location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                  <MapPin className="w-3 h-3 mr-1" />
                  Bilandang, Brgy. Taluya, Glan
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make This Paradise Yours?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a viewing or learn more about this exceptional investment opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Get in Touch</DialogTitle>
                  <DialogDescription>
                    We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="cta-name">Full Name</Label>
                    <Input id="cta-name" placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cta-email">Email</Label>
                    <Input id="cta-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cta-phone">Phone</Label>
                    <Input id="cta-phone" placeholder="+63 XXX XXX XXXX" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cta-message">Message</Label>
                    <Textarea id="cta-message" placeholder="Tell us about your interest..." rows={4} />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white">
                  Send Message
                </Button>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Bilandang Beach Property</h3>
                  <p className="text-sm text-gray-400">Sarangani Province, Philippines</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                A premier beach property investment opportunity along the Celebes Sea, 
                featuring Spanish Mediterranean architecture and pristine natural beauty.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>(+63) 917 980 17 02</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>jlkooring@hotmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Bilandang, Brgy. Taluya, Glan, Sarangani Prov., 9517, Philippines</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Property Details</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex justify-between">
                  <span>Total Area:</span>
                  <span className="text-white">12.3 Hectares (30.4 Acres)</span>
                </div>
                <div className="flex justify-between">
                  <span>Beach Length:</span>
                  <span className="text-white">240 Meters</span>
                </div>
                <div className="flex justify-between">
                  <span>Coastline:</span>
                  <span className="text-white">600 Meters</span>
                </div>
                <div className="flex justify-between">
                  <span>Rooms:</span>
                  <span className="text-white">30 Total</span>
                </div>
                <div className="flex justify-between">
                  <span>Completion:</span>
                  <span className="text-white">80%</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} JOBELENT RESORT DEVELOPMENT CORPORATION. All rights reserved.</p>
            <p className="mt-2">
              Utmost care has been made to provide correct and accurate information. 
              The authors do not warrant or assume any legal liability for the accuracy or completeness of this information.
            </p>
          </div>
        </div>
      </footer>

      {/* Photo Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col">
          <div className="flex items-center justify-between p-4 bg-black/50">
            <div className="text-white">
              <h3 className="font-semibold text-lg">
                {filteredImages[currentImage]?.title}
              </h3>
              <p className="text-sm text-gray-400">
                {currentImage + 1} of {filteredImages.length} photos
              </p>
            </div>
            <Button 
              variant="ghost" 
              onClick={() => setShowGallery(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex gap-2 px-4 py-2 overflow-x-auto bg-black/30">
            <Button
              size="sm"
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(null)
                setCurrentImage(0)
              }}
              className={selectedCategory === null ? "bg-cyan-500 text-white" : "text-white border-white/30"}
            >
              All ({allImages.length})
            </Button>
            {galleryCategories.map((cat) => (
              <Button
                key={cat.name}
                size="sm"
                variant={selectedCategory === cat.name ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(cat.name)
                  setCurrentImage(0)
                }}
                className={selectedCategory === cat.name ? "bg-cyan-500 text-white" : "text-white border-white/30"}
              >
                {cat.name} ({cat.images.length})
              </Button>
            ))}
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="relative w-full h-full max-w-6xl mx-16">
              <Image
                src={filteredImages[currentImage]?.src || ""}
                alt={filteredImages[currentImage]?.alt || ""}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex gap-2 p-4 overflow-x-auto bg-black/50">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                  currentImage === index 
                    ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-black' 
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Document Gallery Modal */}
      {showDocGallery && selectedDoc && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col">
          <div className="flex items-center justify-between p-4 bg-black/50">
            <div className="text-white">
              <Badge variant="outline" className="mr-2 border-white/30 text-white bg-white/10">
                {selectedDoc.type}
              </Badge>
              <h3 className="font-semibold text-lg inline">
                {selectedDoc.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Page {docImageIndex + 1} of {selectedDoc.images.length}
              </p>
            </div>
            <Button 
              variant="ghost" 
              onClick={() => setShowDocGallery(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            {selectedDoc.images.length > 1 && (
              <button
                onClick={() => setDocImageIndex((prev) => (prev - 1 + selectedDoc.images.length) % selectedDoc.images.length)}
                className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}
            
            <div className="relative w-full h-full max-w-4xl mx-16">
              <Image
                src={selectedDoc.images[docImageIndex]}
                alt={selectedDoc.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {selectedDoc.images.length > 1 && (
              <button
                onClick={() => setDocImageIndex((prev) => (prev + 1) % selectedDoc.images.length)}
                className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
          </div>

          {selectedDoc.images.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto bg-black/50 justify-center">
              {selectedDoc.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setDocImageIndex(index)}
                  className={`relative w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                    docImageIndex === index 
                      ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-black' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Page ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
