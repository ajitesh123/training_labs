import { Button } from '@/components/ui/button'
import { Clock, Users, Star } from 'lucide-react'

const courses = [
  {
    title: 'Machine Learning Fundamentals',
    description: 'Master the foundations of ML with Python, from data preprocessing to model evaluation.',
    level: 'Beginner',
    duration: '8 weeks',
    students: '12,500+',
    rating: '4.9',
    price: '$299'
  },
  {
    title: 'Deep Learning & Neural Networks',
    description: 'Build and train neural networks using TensorFlow and PyTorch for real-world applications.',
    level: 'Intermediate',
    duration: '10 weeks',
    students: '8,300+',
    rating: '4.8',
    price: '$349'
  },
  {
    title: 'Natural Language Processing',
    description: 'Learn NLP techniques to build chatbots, sentiment analysis, and language models.',
    level: 'Intermediate',
    duration: '10 weeks',
    students: '6,200+',
    rating: '4.9',
    price: '$349'
  },
  {
    title: 'Computer Vision Mastery',
    description: 'Advanced computer vision using CNNs, object detection, and image segmentation.',
    level: 'Advanced',
    duration: '12 weeks',
    students: '4,800+',
    rating: '4.7',
    price: '$399'
  },
  {
    title: 'AI for Business Leaders',
    description: 'Understand AI strategy, implementation, and ROI for enterprise decision-makers.',
    level: 'Beginner',
    duration: '6 weeks',
    students: '9,100+',
    rating: '4.8',
    price: '$199'
  },
  {
    title: 'Advanced Reinforcement Learning',
    description: 'Create intelligent agents using RL techniques for games, robotics, and autonomous systems.',
    level: 'Advanced',
    duration: '14 weeks',
    students: '2,900+',
    rating: '4.9',
    price: '$449'
  }
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive selection of AI and machine learning courses designed for all skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-medium rounded-full">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} />
                    <span>{course.students} students</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-primary">{course.price}</div>
                  <Button size="sm" variant="default" className="group-hover:bg-secondary">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
