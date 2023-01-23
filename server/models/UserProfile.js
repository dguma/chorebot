const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    user: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        id: mongoose.ObjectId,
        userIcon: String,
        choreDays: Number,
        isHost: {
            type: Boolean,
            default: false,
        },
    },
    choreBot: {
        daysOfWeek: [
            {
            sunday: {
               assignments: [
                {
                    assignment: String,
                    timestamp: {
                        type: String,
                        default: Date.now(),
                    },
                    isComplete: {
                        type: Boolean,
                        default: false,
                    },
                    assignedTo: {
                        userId: String
                    } 
                }
                ],
               
            },
            monday: {
                assignments: [
                 {
                    assignment: String,
                     timestamp: {
                        type: String,
                        default: Date.now(),
                     },
                     isComplete: {
                         type: Boolean,
                         default: false,
                     },
                     assignedTo: [{
                        userId: String
                    }] 
                 }
                 ],
             },
            tuesday: {
                assignments: [
                 {
                    assignment: String,
                     timestamp: {
                        type: String,
                        default: Date.now(),
                     },
                     isComplete: {
                         type: Boolean,
                         default: false,
                     },
                     assignedTo: [{
                        userId: String
                    }] 
                 }
                 ],
             },
            wednesday: {
                assignments: [
                 {
                    assignment: String,
                     timestamp: {
                        type: String,
                        default: Date.now(),
                     },
                     isComplete: {
                         type: Boolean,
                         default: false,
                     },
                     assignedTo: [{
                        userId: String
                    }] 
                 }
                 ],
             },
            thursday: {
                assignments: [
                 {
                    assignment: String,
                     timestamp: {
                        type: String,
                        default: Date.now(),
                     },
                     isComplete: {
                         type: Boolean,
                         default: false,
                     },
                     assignedTo: [{
                        userId: String
                    }] 
                 }
                 ],
             },
            friday: {
                assignments: [
                 {
                    assignment: String,
                     timestamp: {
                        type: String,
                        default: Date.now(),
                     },
                     isComplete: {
                         type: Boolean,
                         default: false,
                     },
                     assignedTo: [{
                        userId: String
                    }] 
                 }
                 ],
             },
            saturday: {
                assignments: [
                 {
                    assignment: String,
                     timestamp: {
                        type: String,
                        default: Date.now(),
                     },
                     isComplete: {
                         type: Boolean,
                         default: false,
                     },
                     assignedTo: [{
                        userId: String
                    }] 
                 }
                 ],
             },
        }
    ]
    }
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

module.exports = UserProfile;


